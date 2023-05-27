<?php
/**
 * Booking related hooks
 *
 * @package Timetics
 */

namespace Timetics\Core\Bookings;

use Timetics\Core\Emails\Booking_Reminder_Email;
use Timetics\Utils\Singleton;

/**
 * Class Hooks
 */
class Hooks {
    use Singleton;

    /**
     * Initialization
     *
     * @return  void
     */
    public function init() {
        add_action( 'timetics_after_booking_create', [$this, 'register_schedule'] );
        add_action( 'init', [$this, 'run_booking_schedule'] );
        add_action( 'timetics_booking_clear_schedule', [$this, 'clear_booking_schedule'] );
    }

    /**
     * Register cron job for schedule a reminder email
     *
     * @param   integer  $booking_id
     *
     * @return  void
     */
    public function register_schedule( $booking_id ) {
        $booking = new Booking( $booking_id );

        $date = $booking->get_start_date();
        $time = $booking->get_start_time();

        $booking_timestamp = strtotime( $date . ' ' . $time );

        $reminder_time = timetics_get_option( 'remainder_time' );

        if ( ! $reminder_time ) {
            return;
        }

        foreach ( $reminder_time as $time ) {
            $timestamp = '';
            $duration  = $time['duration-time'];

            switch ( $time['custom_duration_type'] ) {
            case 'min':
                $timestamp = $duration * 60;
                break;
            case 'hour':
                $timestamp = $duration * 60 * 60;
                break;
            case 'day':
                $timestamp = ( $duration * 24 ) * 60 * 60;
                break;
            }

            $timestamp = $booking_timestamp - $timestamp;

            if ( ! wp_next_scheduled( 'timetics_booking_remainder_' . $booking_id ) ) {
                wp_schedule_single_event( $timestamp, 'timetics_booking_remainder_' . $booking_id, [$booking_id] );
            }
        }
    }

    /**
     * Booking schedule
     *
     * @return  void
     */
    public function run_booking_schedule() {
        $bookins = Booking::all();

        if ( ! $bookins ) {
            return;
        }

        // Run cron action.
        foreach ( $bookins['items'] as $booking ) {
            add_action( 'timetics_booking_remainder_' . $booking->ID, [$this, 'send_reminder_email'] );
        }
    }

    /**
     * Send booking reminder email
     *
     * @param   integer  $booking_id
     *
     * @return  void
     */
    public function send_reminder_email( $booking_id ) {
        $booking = new Booking( $booking_id );

        $booking_reminder = new Booking_Reminder_Email( $booking );

        $booking_reminder->send();
    }

    /**
     * Clear cron job schedule
     *
     * @return
     */
    public function clear_booking_schedule() {
        $bookins = Booking::all();

        if ( ! $bookins ) {
            return;
        }

        // Run cron action.
        foreach ( $bookins['items'] as $booking ) {
            $timestamp = wp_next_scheduled( 'timetics_booking_remainder_' . $booking->ID );

            if ( $timestamp && $timestamp < time() ) {
                wp_unschedule_event( $timestamp, 'timetics_booking_remainder_' . $booking->ID );
            }
        }
    }
}
