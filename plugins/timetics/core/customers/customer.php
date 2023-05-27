<?php
/**
 * Cutomer Class
 *
 * @package Timetics
 */
namespace Timetics\Core\Customers;

use Timetics\Core\Bookings\Booking;

/**
 * Customer class
 *
 * @since 1.0.0
 */
class Customer {
    /**
     * Store customer id
     *
     * @var integer
     */
    protected $id;

    /**
     * Store meta prefix
     *
     * @var string
     */
    protected $meta_prefix = '_timetics_customer_';

    /**
     * Store error
     *
     * @var Object
     */
    public $error;

    /**
     * Customer data
     *
     * @var array
     */
    protected $data = [
        'image'      => '',
        'first_name' => '',
        'last_name'  => '',
        'email'      => '',
        'phone'      => '',
    ];

    /**
     * Customer constructor
     *
     * @return void
     */
    public function __construct( $customer = 0 ) {
        if ( $customer instanceof self ) {
            $this->set_id( $customer->get_id() );
        } elseif ( ! empty( $customer->ID ) ) {
            $this->set_id( $customer->ID );
        } elseif ( is_numeric( $customer ) && $customer > 0 ) {
            $this->set_id( $customer );
        }
    }

    /**
     * Get customer id
     *
     * @return integer
     */
    public function get_id() {
        return $this->id;
    }

    /**
     * Get first name
     *
     * @return  string
     */
    public function get_first_name() {
        return $this->get_prop( 'first_name' );
    }

    /**
     * Get last name
     *
     * @return  string
     */
    public function get_last_name() {
        return $this->get_prop( 'last_name' );
    }

    /**
     * Get customer display name
     *
     * @return string
     */
    public function get_display_name() {
        return $this->get_first_name() . ' ' . $this->get_last_name();
    }

    /**
     * Get email
     *
     * @return  string
     */
    public function get_email() {
        $customer = get_userdata( $this->id );

        if ( $customer ) {
            return $customer->user_email;
        }

        return '';
    }

    /**
     * Get phone
     *
     * @return  string
     */
    public function get_phone() {
        return $this->get_prop( 'phone' );
    }

    /**
     * Get customer image
     *
     * @return  string
     */
    public function get_image() {
        $image = $this->get_prop( 'image' );

        if ( ! $image ) {
            return get_avatar_url( $this->id );
        }

        return wp_get_attachment_image_url( $image );
    }

    /**
     * Get prop
     *
     * @param  string
     *
     * @return  string
     */
    public function get_prop( $prop = '' ) {
        return $this->get_metadata( $prop );
    }

    /**
     * Get customer metadata
     *
     * @param   string  $prop
     *
     * @return string
     */
    public function get_metadata( $prop = '' ) {
        $meta_key = $this->meta_prefix . $prop;

        return get_user_meta( $this->id, $meta_key, true );
    }

    // Setters.
    /**
     * Set customer id
     *
     * @param   integer  $id
     *
     * @return  void
     */
    public function set_id( $id ) {
        $this->id = $id;
    }

    /**
     * Set props
     *
     * @param   array  $args  Customer Data
     *
     * @return  void
     */
    public function set_props( $args = [] ) {
        $this->data = wp_parse_args( $args, $this->data );
    }

    /**
     * Update meta data
     *
     * @return  void
     */
    public function save_metadata() {
        foreach ( $this->data as $key => $value ) {
            // Prepare meta key.
            $meta_key = $this->meta_prefix . $key;

            // Update appointment meta data.
            update_user_meta( $this->id, $meta_key, $value );
        }
    }

    /**
     * Check user is valid staff
     *
     * @return  bool
     */
    public function is_customer() {
        $user = get_userdata( $this->id );

        if ( $user ) {
            return in_array( 'timetics-customer', $user->roles, true );
        }

        return true;
    }

    /**
     * Save customer
     *
     * @return void
     */
    public function save() {
        $args = [
            'first_name' => $this->data['first_name'],
            'last_name'  => $this->data['last_name'],
            'user_login' => $this->data['email'],
            'user_email' => $this->data['email'],
            'user_pass'  => wp_generate_password(),
            'role'       => 'timetics-customer',
        ];

        if ( $this->id ) {
            $args['ID'] = $this->id;
            unset( $args['user_email'] );
        }

        $customer_id = wp_insert_user( $args );

        if ( is_wp_error( $customer_id ) ) {
            $this->error = $customer_id;
            return;
        }

        $this->set_id( $customer_id );
        $this->save_metadata();
    }

    /**
     * Delete customer
     *
     * @return  bool
     */
    public function delete() {
        require_once ABSPATH . 'wp-admin/includes/user.php';

        // Get all bookings for this customer.
        $bookings = $this->get_bookings();

        // Delete all bookings for this customer.
        foreach ( $bookings  as $booking ) {
            $booking = new Booking( $booking );
            $booking->delete();
        }

        return wp_delete_user( $this->id );
    }

    /**
     * Make customer using email
     *
     * @param  array Customer data
     *
     * @return Customer
     */
    public function make( $args = [] ) {
        $defaults = [
            'first_name' => '',
            'last_name'  => '',
            'email'      => '',
            'phone'      => '',
        ];

        $args = wp_parse_args( $args, $defaults );

        if ( email_exists( $args['email'] ) ) {
            $user = get_user_by( 'email', $args['email'] );

            if ( ! $this->is_customer() ) {
                $user->add_role( 'timetics-customer' );
            }
            $this->set_id( $user->ID );
            $this->set_props( $args );
            $this->save_metadata();
        } else {
            $this->set_props( $args );
            $this->save();
        }
    }

    /**
     * Get total booking for a customer
     *
     * @return  integer
     */
    public function get_total_booking() {
        $bookings = $this->booking_query();

        return $bookings->found_posts;
    }

    /**
     * Get all bookings by customer
     *
     * @return array
     */
    public function get_bookings() {
        $bookings = $this->booking_query();

        return $bookings->posts;
    }

    /**
     * Get query for bookings
     *
     * @return  WP_Query
     */
    private function booking_query() {
        $query = new \WP_Query(
            [
				'post_type'   => 'timetics-booking',
				'post_status' => 'publish',
                // @codingStandardsIgnoreStart
				'meta_key'    => '_tt_booking_customer',
				'meta_value'  => $this->id,
                // @codingStandardsIgnoreEnd
			]
        );

        return $query;
    }

    /**
     * Get all customer
     *
     * @param   array  $args  Customer
     *
     * @return  array
     */
    public static function all( $args = [] ) {
        $defaults = [
            'role'   => 'timetics-customer',
            'number' => 20,
            'paged'  => 1,
        ];

        $args = wp_parse_args( $args, $defaults );

        $users = new \WP_User_Query( $args );

        return [
            'total' => $users->get_total(),
            'items' => $users->get_results(),
        ];
    }
}
