<?php
/**
 * Booking Class
 *
 * @package Timetics
 */

namespace Timetics\Core\Bookings;

use Timetics\Core\Appointments\Appointment;
use Timetics\Core\Customers\Customer;
use Timetics\Core\Integrations\Google\Service\Calendar;
use Timetics\Core\Staffs\Staff;
use WP_Query;

/**
 * Class Booking
 */
class Booking {
    /**
     * Store booking post type
     *
     * @var string
     */
    protected $pos_type = 'timetics-booking';

    /**
     * Store booking meta prefix
     *
     * @var string
     */
    protected $meta_prefix = '_tt_booking_';

    /**
     * Store booking id
     *
     * @var string
     */
    protected $id;

    /**
     * Store appointment object
     *
     * @var Object
     */
    protected $appointment;

    /**
     * Store booking data
     *
     * @var array
     */
    protected $data = [
        'post_status'     => '',
        'customer'        => '',
        'appointment'     => '',
        'staff'           => '',
        'location'        => '',
        'description'     => '',
        'location_type'   => '',
        'payment_method'  => '',
        'payment_status'  => '',
        'payment_details' => '',
        'order_total'     => '',
        'start_date'      => '',
        'end_date'        => '',
        'start_time'      => '',
        'end_time'        => '',
        'calendar_event'  => '',
        'random_id'       => '',
        'seats'           => '',
    ];

    /**
     * Booking Constructor
     *
     * @return  void
     */
    public function __construct( $booking = 0 ) {
        if ( $booking instanceof self ) {
            $this->set_id( $booking->get_id() );
        } elseif ( ! empty( $booking->ID ) ) {
            $this->set_id( $booking->ID );
        } elseif ( is_numeric( $booking ) && $booking > 0 ) {
            $this->set_id( $booking );
        }
    }

    /**
     * Get id
     *
     * @return  integer
     */
    public function get_id() {
        return $this->id;
    }

    /**
     * Get customer id
     *
     * @return integer
     */
    public function get_customer_id() {
        return $this->get_prop( 'customer' );
    }

    /**
     * Get staff for the current booking
     *
     * @return integer
     */
    public function get_staff_id() {
        return $this->get_prop( 'staff' );
    }

    /**
     * Get customer
     *
     * @return  User Object
     */
    public function get_customer() {
        return get_userdata( $this->get_customer_id() );
    }

    /**
     * Get seats of a booking
     *
     * @return  array
     */
    public function get_seat() {
        return $this->get_prop( 'seats' );
    }

    /**
     * Get billing first name
     *
     * @return  string
     */
    public function get_billing_first_name() {
        return $this->get_prop( 'first_name' );
    }

    /**
     * Get location
     *
     * @return string
     */
    public function get_location() {
        return $this->get_prop( 'location' );
    }

    /**
     * Get location type
     *
     * @return string
     */
    public function get_location_type() {
        return $this->get_prop( 'location_type' );
    }

    /**
     * Get last name
     *
     * @return  string
     */
    public function get_billing_last_name() {
        return $this->get_prop( 'last_name' );
    }

    /**
     * Get email
     *
     * @return  string
     */
    public function get_billing_email() {
        return $this->get_prop( 'email' );
    }

    /**
     * Get billing phone
     *
     * @return  string
     */
    public function get_billing_phone() {
        return $this->get_prop( 'phone' );
    }

    /**
     * Get description
     *
     * @return string
     */
    public function get_description() {
        return $this->get_prop( 'description' );
    }

    /**
     * Get billing address
     *
     * @param   string  $adress_type  Booking billing address
     *
     * @return  string
     */
    public function get_billing_address( $adress_type = 'address_1' ) {
        return $this->get_prop( $adress_type );
    }

    /**
     * Get billing city
     *
     * @return string
     */
    public function get_billing_city() {
        return $this->get_prop( 'city' );
    }

    /**
     * Get billing state
     *
     * @return  string
     */
    public function get_billing_state() {
        return $this->get_prop( 'state' );
    }

    /**
     * Get billing post code
     *
     * @return  string
     */
    public function get_billing_post_code() {
        return $this->get_prop( 'post_code' );
    }

    /**
     * Get billing
     *
     * @return  string
     */
    public function get_billing_country() {
        return $this->get_prop( 'country' );
    }

    /**
     * Get payment method
     *
     * @return  string
     */
    public function get_payment_method() {
        return $this->get_prop( 'payment_method' );
    }

    /**
     * Get appointment
     *
     * @return Appointment
     */
    public function get_appointment() {
        return $this->get_prop( 'appointment' );
    }

    /**
     * Get calendar event
     *
     * @return array
     */
    public function get_event() {
        return $this->get_prop( 'calendar_event' );
    }

    /**
     * Get post status
     *
     * @return  string
     */
    public function get_status() {
        return get_post( $this->id )->post_status;
    }

    /**
     * Get total
     *
     * @return  integer
     */
    public function get_total() {
        return $this->get_prop( 'order_total' );
    }

    /**
     * Get start date
     *
     * @return  string
     */
    public function get_start_date() {
        return $this->get_prop( 'start_date' );
    }
    /**
     * Get start date
     *
     * @return  string
     */
    public function get_date() {
        return $this->get_prop( 'date' );
    }

    /**
     * Get end date
     *
     * @return  string
     */
    public function get_end_date() {
        return $this->get_prop( 'end_date' );
    }

    /**
     * Get start time
     *
     * @return  string
     */
    public function get_start_time() {
        return $this->get_prop( 'start_time' );
    }

    /**
     * Get end time
     *
     * @return  string
     */
    public function get_end_time() {
        return $this->get_prop( 'end_time' );
    }

    /**
     * Get random id for the current booking
     *
     * @return  string
     */
    public function get_random_id() {
        return $this->get_prop( 'random_id' );
    }

    /**
     * Get payment details
     *
     * @return  array
     */
    public function get_payment_details() {
        return $this->get_prop( 'payment_details' );
    }

    /**
     * Get booking data
     *
     * @param   string  $prop
     *
     * @return  mixed
     */
    private function get_prop( $prop = '' ) {
        return $this->get_metadata( $prop );
    }

    /**
     * Get metadata
     *
     * @param   string  $prop
     *
     * @return  mixed
     */
    private function get_metadata( $prop = '' ) {
        $meta_key = $this->meta_prefix . $prop;

        return get_post_meta( $this->id, $meta_key, true );
    }

    /**
     * Generate random id
     *
     * @return  string
     */
    private function generate_randon_id() {
        return chr( rand( ord( 'A' ), ord( 'Z' ) ) ) . rand( 575639, 575639 + 400 );
    }

    // Setter.

    /**
     * Set booking id
     *
     * @param   integer  $id
     *
     * @return  void
     */
    public function set_id( $id ) {
        $this->id = $id;
    }

    /**
     * Set data
     *
     * @param   array  $args  Booking Args
     *
     * @return void
     */
    public function set_props( $args = [] ) {
        $this->data        = wp_parse_args( $args, $this->data );
        $this->appointment = new Appointment( $this->data['appointment'] );
    }

    /**
     * Save metada for booking
     *
     * @return  void
     */
    public function save_metadata( $args = [] ) {
        foreach ( $args as $key => $value ) {

            // If a key not exists on data it will skip to save the data.
            if ( ! array_key_exists( $key, $this->data ) ) {
                continue;
            }

            // Prepare meta key.
            $meta_key = $this->meta_prefix . $key;

            if ( ! $value ) {
                $value = $this->get_prop( $key );
            }

            // Update appointment meta data.
            update_post_meta( $this->id, $meta_key, $value );
        }
    }

    /**
     * Save appointment
     *
     * @return void
     */
    public function save() {
        $args = [
            'post_title'  => $this->appointment->get_name(),
            'post_type'   => $this->pos_type,
            'post_status' => $this->data['post_status'],
            'post_author' => get_current_user_id(),
        ];

        if ( ! empty( $this->id ) ) {
            $args['ID'] = $this->id;
        }

        // Insert or Update appointment.
        $booking_id              = wp_insert_post( $args );
        $this->data['random_id'] = $this->generate_randon_id();

        if ( ! is_wp_error( $booking_id ) ) {
            $this->set_id( $booking_id );
            $this->save_metadata( $this->data );
        }
    }

    /**
     * Update booking
     *
     * @param   array  $args
     *
     * @return  bool
     */
    public function update( $args = [] ) {
        $post = get_post( $this->id )->to_array();
        $args = wp_parse_args( $args, $post );

        $updated = wp_update_post( $args );

        if ( ! is_wp_error( $updated ) ) {
            $this->save_metadata( $args );
        }

        return $updated;
    }

    /**
     * Delete booking
     *
     * @return bool | WP_Error
     */
    public function delete() {
        return wp_delete_post( $this->id, true );
    }

    /**
     * Check is a booking or not
     *
     * @return  bool
     */
    public function is_booking() {
        $post = get_post( $this->id );

        if ( $post && $this->pos_type === $post->post_type ) {
            return true;
        }

        return false;
    }

    /**
     * Get all bookings
     *
     * @param   array  $args  Bookings args
     *
     * @return  array
     */
    public static function all( $args = [] ) {

        $status = [
            'approved',
            'pending',
            'cancel',
            'completed',
        ];
        $defaults = [
            'post_type'      => 'timetics-booking',
            'posts_per_page' => 20,
            'post_status'    => 'any',
            'paged'          => 1,
        ];

        $args = wp_parse_args( $args, $defaults );

        if ( ! empty( $args['meeting'] ) ) {
            // @codingStandardsIgnoreStart
            $args['meta_query'] = [
                [
                    'key'     => '_tt_booking_appointment',
                    'value'   => $args['meeting'],
                    'compare' => '=',
                ],
            ];
            // @codingStandardsIgnoreEnd
        }

        if ( ! empty( $args['staff'] ) ) {
            // @codingStandardsIgnoreStart
            $args['meta_query'] = [
                [
                    'key'     => '_tt_booking_staff',
                    'value'   => $args['staff'],
                    'compare' => '=',
                ],
            ];
            // @codingStandardsIgnoreEnd
        }

        $post = new WP_Query( $args );

        return [
            'total' => $post->found_posts,
            'items' => $post->posts,
        ];
    }

    /**
     * Create event after creating a booking
     *
     * @return bool
     */
    public function create_event() {

        if ( ! timetics_google_setup() ) {
            return;
        }

        $data = [
            'summary'     => timetics_get_option( 'booking_created_customer_email_title' ),
            'description' => timetics_get_option( 'booking_created_customer_email_body' ),
        ];

        $calendar   = new Calendar();
        $event_data = $this->prepare_event( $data );
        $event      = $calendar->create_event( $event_data );

        update_post_meta( $this->id, $this->meta_prefix . 'calendar_event', $event );
    }

    /**
     * Update calendar event
     *
     * @return bool
     */
    public function update_event() {
        if ( ! timetics_google_setup() ) {
            return;
        }

        $data = [
            'summary'     => timetics_get_option( 'booking_rescheduled_customer_email_title' ),
            'description' => timetics_get_option( 'booking_rescheduled_customer_email_body' ),
        ];

        $calendar       = new Calendar();
        $event_data     = $this->prepare_event( $data );
        $calendar_event = $this->get_event();

        if ( ! empty( $calendar_event['id'] ) ) {
            // Update calendar event.
            $event = $calendar->update_event( $calendar_event['id'], $event_data );

            // update calendar event data.
            update_post_meta( $this->id, $this->meta_prefix . 'calendar_event', $event );
        }
    }

    /**
     * Delete calendar event
     *
     * @return
     */
    public function delete_event() {
        if ( ! timetics_google_setup() ) {
            return;
        }

        $calendar       = new Calendar();
        $calendar_event = $this->get_event();
        $access_token   = timetics_get_google_access_token( $this->get_staff_id() );

        if ( ! empty( $calendar_event['id'] ) ) {
            // Update calendar event.
            $event = $calendar->delete_event( $calendar_event['id'], $access_token );

            // update calendar event data.
            update_post_meta( $this->id, $this->meta_prefix . 'calendar_event', $event );
        }
    }

    /**
     * Prepare event data
     *
     * @return  array
     */
    private function prepare_event( $data = [] ) {
        $meeting_id    = $this->get_appointment();
        $staff_id      = $this->get_staff_id();
        $customer_id   = $this->get_customer_id();
        $location_type = $this->get_location_type();

        $meeting  = new Appointment( $meeting_id );
        $staff    = new Staff( $staff_id );
        $customer = new Customer( $customer_id );

        $time     = gmdate( 'h:i a', strtotime( $this->get_start_time() ) );
        $date     = gmdate( 'd F Y', strtotime( $this->get_start_date() ) );
        $location = $this->get_location();

        $placeholders = [
            '{%meeting_title%}'    => $meeting->name,
            '{%meeting_date%}'     => $date,
            '{%meeting_time%}'     => $time,
            '{%meeting_location%}' => $location,
            '{%meeting_duration%}' => $meeting->duration,
            '{%host_name%}'        => $staff->get_display_name(),
            '{%host_email%}'       => $staff->get_email(),
            '{%customer_name%}'    => $customer->get_display_name(),
            '{%customer_email%}'   => $customer->get_email(),
        ];

        $summary     = ! empty( $data['summary'] ) ? timetics_replace_placeholder( $data['summary'], $placeholders ) : $meeting->get_name();
        $description = ! empty( $data['description'] ) ? timetics_replace_placeholder( $data['description'], $placeholders ) : $meeting->get_description();

        $event = [
            'summary'      => $summary,
            'description'  => $description,
            'start'        => [
                'date' => $this->get_start_date(),
                'time' => $this->get_start_time(),
            ],
            'end'          => [
                'date' => $this->get_end_date(),
                'time' => $this->get_end_time(),
            ],
            'attendees'    => [
                ['email' => $staff->get_email()],
                ['email' => $customer->get_email()],
            ],
            'google_meet'  => 'virtual' === $location_type,
            'access_token' => timetics_get_google_access_token( $staff_id ),
        ];

        return $event;
    }
}
