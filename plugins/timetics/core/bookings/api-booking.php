<?php
/**
 * Booking api
 *
 * @package Timetics
 */
namespace Timetics\Core\Bookings;

use Timetics\Base\Api;
use Timetics\Core\Appointments\Appointment;
use Timetics\Core\Customers\Customer;
use Timetics\Core\Emails\Cancel_Event_Email;
use Timetics\Core\Emails\New_Event_Email;
use Timetics\Core\Emails\Update_Event_Email;
use Timetics\Core\Staffs\Staff;
use Timetics\Utils\Singleton;
use WP_HTTP_Response;
use WP_Query;

class Api_Booking extends Api {
    use Singleton;

    /**
     * Store api namespace
     *
     * @var string
     */
    protected $namespace = 'timetics/v1';

    /**
     * Store rest base
     *
     * @var string
     */
    protected $rest_base = 'bookings';

    /**
     * Register rest routes
     *
     * @return  void
     */
    public function register_routes() {
        /**
         * Register route
         *
         * @var void
         */
        register_rest_route(
            $this->namespace, $this->rest_base, [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [$this, 'get_items'],
                    'permission_callback' => function () {
                        return current_user_can( 'manage_timetics' );
                    },
                ],
                [
                    'methods'             => \WP_REST_Server::CREATABLE,
                    'callback'            => [$this, 'create_item'],
                    'permission_callback' => function () {
                        return true;
                    },
                ],
                [
                    'methods'             => \WP_REST_Server::DELETABLE,
                    'callback'            => [$this, 'bulk_delete'],
                    'permission_callback' => function () {
                        return current_user_can( 'edit_booking' );
                    },
                ],
            ]
        );

        /**
         * Register route
         *
         * @var void
         */
        register_rest_route(
            $this->namespace, '/' . $this->rest_base . '/(?P<booking_id>[\d]+)', [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [$this, 'get_item'],
                    'permission_callback' => function () {
                        return current_user_can( 'manage_timetics' );
                    },
                ],
                [
                    'methods'             => \WP_REST_Server::EDITABLE,
                    'callback'            => [$this, 'update_item'],
                    'permission_callback' => function () {
                        return true;
                    },
                ],
                [
                    'methods'             => \WP_REST_Server::DELETABLE,
                    'callback'            => [$this, 'delete_item'],
                    'permission_callback' => function () {
                        return current_user_can( 'edit_booking' );
                    },
                ],
            ]
        );

        register_rest_route(
            $this->namespace, '/' . $this->rest_base . '/(?P<booking_id>[\d]+)/payment', [
                [
                    'methods'             => \WP_REST_Server::EDITABLE,
                    'callback'            => [$this, 'make_payment'],
                    'permission_callback' => function () {
                        return true;
                    },
                ],
            ]
        );

        register_rest_route(
            $this->namespace, $this->rest_base . '/search', [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [$this, 'search_items'],
                    'permission_callback' => function () {
                        return current_user_can( 'edit_posts' );
                    },
                ],
            ]
        );

        register_rest_route(
            $this->namespace, $this->rest_base . '/entries', [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [$this, 'get_entries'],
                    'permission_callback' => function () {
                        return true;
                    },
                ],
            ]
        );

        register_rest_route(
            $this->namespace, $this->rest_base . '/payment_methods', [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [$this, 'get_payment_methods'],
                    'permission_callback' => function () {
                        return true;
                    },
                ],
            ]
        );
    }

    /**
     * Get all bookings
     *
     * @param   WP_Rest_Request  $request
     *
     * @return JSON
     */
    public function get_items( $request ) {
        $per_page   = ! empty( $request['per_page'] ) ? intval( $request['per_page'] ) : 20;
        $paged      = ! empty( $request['paged'] ) ? intval( $request['paged'] ) : 1;
        $meeting_id = ! empty( $request['meeting_id'] ) ? intval( $request['meeting_id'] ) : 0;
        $staff_id   = ! current_user_can( 'edit_booking' ) ? get_current_user_id() : 0;

        $args = [
            'posts_per_page' => $per_page,
            'paged'          => $paged,
            'meeting'        => $meeting_id,
            'staff'          => $staff_id,
        ];
        $appoint = Booking::all( $args );

        $items = [];

        foreach ( $appoint['items'] as $item ) {
            $items[] = $this->prepare_item( $item->ID );
        }

        $data = [
            'success'     => 1,
            'status_code' => 200,
            'data'        => [
                'total' => $appoint['total'],
                'items' => $items,
            ],
        ];

        return rest_ensure_response( $data );
    }

    /**
     * Get single booking
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON
     */
    public function get_item( $request ) {
        $booking_id = (int) $request['booking_id'];
        $booking    = new Booking( $booking_id );

        if ( ! $booking->is_booking() ) {
            return [
                'success'     => 0,
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid booking id.', 'timetics' ),
                'data'        => [],
            ];
        }

        $data = [
            'success'     => 1,
            'status_code' => 200,
            'data'        => $this->prepare_item( $booking ),
        ];

        return rest_ensure_response( $data );
    }

    /**
     * Create booking
     *
     * @param   WP_Rest_Request  $request
     *
     * @return JSON
     */
    public function create_item( $request ) {
        return $this->save_bookings( $request );
    }

    /**
     * Update booking
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON
     */
    public function update_item( $request ) {
        $booking_id = (int) $request['booking_id'];
        $booking    = new Booking( $booking_id );

        if ( ! $booking->is_booking() ) {
            return [
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid booking id.', 'timetics' ),
                'data'        => [],
            ];
        }

        return $this->save_bookings( $request, $booking_id );
    }

    /**
     * Delete booking
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON
     */
    public function delete_item( $request ) {
        $booking_id = (int) $request['booking_id'];
        $booking    = new Booking( $booking_id );

        if ( ! $booking->is_booking() ) {
            return [
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid booking id.', 'timetics' ),
                'data'        => [],
            ];
        }

        $booking->delete_event();
        $booking->delete();
        $cancel_event_email = new Cancel_Event_Email( $booking );
        $cancel_event_email->send();

        $data = [
            'success'     => 1,
            'status_code' => 200,
            'message'     => esc_html__( 'Successfully deleted booking', 'timetics' ),
            'data'        => [],
        ];

        return rest_ensure_response( $data );
    }

    /**
     * Delete multiples
     *
     * @param   WP_Rest_Request  $request
     *
     * @return JSON
     */
    public function bulk_delete( $request ) {
        $bookings = json_decode( $request->get_body(), true );

        foreach ( $bookings as $booking ) {
            $booking = new Booking( $booking );

            if ( ! $booking->is_booking() ) {
                return [
                    'success'     => 0,
                    'status_code' => 404,
                    'message'     => esc_html__( 'Invalid booking id.', 'timetics' ),
                    'data'        => [],
                ];
            }

            $booking->delete();
        }

        return [
            'success'     => 1,
            'status_code' => 200,
            'message'     => esc_html__( 'Successfully deleted booking', 'timetics' ),
        ];
    }

    /**
     * Get payment methods
     *
     * @return array
     */
    public function get_payment_methods() {

        $payment_methods = timetics_get_payment_methods();

        return [
            'success'     => 1,
            'status_code' => 200,
            'data'        => $payment_methods,
        ];
    }

    /**
     * Search bookings
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON
     */
    public function search_items( $request ) {
        // Prepare search args.
        $per_page = ! empty( $request['per_page'] ) ? intval( $request['per_page'] ) : 20;
        $paged    = ! empty( $request['paged'] ) ? intval( $request['paged'] ) : 1;
        $search   = ! empty( $request['search'] ) ? sanitize_text_field( $request['search'] ) : '';

        // Get search.
        $booking = new WP_Query(
            array(
                'post_type'      => 'timetics-booking',
                'posts_per_page' => $per_page,
                'paged'          => $paged,
                'post_status'    => 'any',

                // @codingStandardsIgnoreStart
                'meta_query' => array(
                    'relation' => 'OR',
                    array(
                        'key'     => '_tt_booking_customer_fname',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_booking_customer_lname',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_booking_customer_email',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_booking_customer_phone',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_booking_staff_fname',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_booking_staff_lname',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_booking_staff_email',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_booking_meeting_name',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_booking_meeting_description',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_booking_meeting_type',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                ),
                // @codingStandardsIgnoreEnd
            )
        );

        // Prepare items for response.
        $items = [];

        foreach ( $booking->posts as $item ) {
            $items[] = $this->prepare_item( $item->ID );
        }

        $data = [
            'success' => 1,
            'status'  => 200,
            'data'    => [
                'total' => $booking->found_posts,
                'items' => $items,
            ],
        ];

        return rest_ensure_response( $data );
    }

    /**
     * Get all booking entries
     *
     * @param   WP_Rest_Request  $request
     *
     * @return JSON
     */
    public function get_entries( $request ) {
        $staff_id   = ! empty( $request['staff_id'] ) ? intval( $request['staff_id'] ) : 0;
        $meeting_id = ! empty( $request['meeting_id'] ) ? intval( $request['meeting_id'] ) : 0;
        $start_date = ! empty( $request['start_date'] ) ? sanitize_text_field( $request['start_date'] ) : 0;
        $end_date   = ! empty( $request['end_date'] ) ? sanitize_text_field( $request['end_date'] ) : 0;

        $meeting = new Appointment( $meeting_id );

        $days = $meeting->prepare_schedule( $start_date, $end_date, $staff_id );

        $data = [
            'today'                 => gmdate( 'Y-m-d' ),
            'availability_timezone' => $meeting->get_timezone(),
            'days'                  => $days,
        ];

        return [
            'success'     => true,
            'status_code' => 200,
            'message'     => esc_html__( 'Get all entries', 'timetics' ),
            'data'        => $data,
        ];
    }

    /**
     * Make payment transaction for the current booking
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON
     */
    public function make_payment( $request ) {
        $booking_id      = intval( $request['booking_id'] );
        $booking         = new Booking( $booking_id );
        $data            = json_decode( $request->get_body(), true );
        $status          = ! empty( $data['status'] ) ? sanitize_text_field( $data['status'] ) : '';
        $post_status     = 'succeeded' === $status ? 'completed' : 'pending';
        $payment_method  = ! empty( $data['payment_method'] ) ? sanitize_text_field( $data['payment_method'] ) : '';
        $payment_details = ! empty( $data['payment_details'] ) ? $data['payment_details'] : '';

        if ( ! $booking->is_booking() ) {
            return [
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid booking id.', 'timetics' ),
                'data'        => [],
            ];
        }

        $update = $booking->update(
            [
                'post_status'     => $post_status,
                'payment_status'  => $status,
                'payment_details' => $payment_details,
                'payment_method'  => $payment_method,
            ]
        );

        if ( is_wp_error( $update ) ) {
            $data = [
                'success'     => 0,
                'status_code' => 409,
                /* translators: Action */
                'message'     => $update->get_error_message(),
            ];

            return new WP_HTTP_Response( $data, 409 );
        }

        $data = [
            'success'     => 1,
            'status_code' => 200,
            /* translators: Action */
            'message'     => sprintf( esc_html__( 'Payment %s', 'timetics' ), $post_status ),
        ];

        return new WP_HTTP_Response( $data, 200 );
    }

    /**
     * Save booking
     *
     * @param   WP_Rest_Request  $request
     * @param   integer  $id       Booking id
     *
     * @return  JSON
     */
    public function save_bookings( $request, $id = 0 ) {
        $data = json_decode( $request->get_body(), true );

        $first_name     = ! empty( $data['first_name'] ) ? sanitize_text_field( $data['first_name'] ) : '';
        $last_name      = ! empty( $data['last_name'] ) ? sanitize_text_field( $data['last_name'] ) : '';
        $email          = ! empty( $data['email'] ) ? sanitize_text_field( $data['email'] ) : '';
        $phone          = ! empty( $data['phone'] ) ? sanitize_text_field( $data['phone'] ) : '';
        $city           = ! empty( $data['city'] ) ? sanitize_text_field( $data['city'] ) : '';
        $state          = ! empty( $data['state'] ) ? sanitize_text_field( $data['state'] ) : '';
        $post_code      = ! empty( $data['post_code'] ) ? sanitize_text_field( $data['post_code'] ) : '';
        $country        = ! empty( $data['country'] ) ? sanitize_text_field( $data['country'] ) : '';
        $payment_method = ! empty( $data['payment_method'] ) ? sanitize_text_field( $data['payment_method'] ) : '';
        $address_1      = ! empty( $data['address_1'] ) ? sanitize_text_field( $data['address_1'] ) : '';
        $address_2      = ! empty( $data['address_2'] ) ? sanitize_text_field( $data['address_2'] ) : '';
        $appointment    = ! empty( $data['appointment'] ) ? intval( $data['appointment'] ) : 0;
        $staff          = ! empty( $data['staff'] ) ? intval( $data['staff'] ) : 0;
        $start_date     = ! empty( $data['start_date'] ) ? sanitize_text_field( $data['start_date'] ) : '';
        $date           = ! empty( $data['date'] ) ? sanitize_text_field( $data['date'] ) : '';
        $end_date       = ! empty( $data['end_date'] ) ? sanitize_text_field( $data['end_date'] ) : $start_date;
        $start_time     = ! empty( $data['start_time'] ) ? sanitize_text_field( $data['start_time'] ) : '';
        $end_time       = ! empty( $data['end_time'] ) ? sanitize_text_field( $data['end_time'] ) : '';
        $order_total    = ! empty( $data['order_total'] ) ? intval( $data['order_total'] ) : 0;
        $status         = ! empty( $data['status'] ) ? sanitize_text_field( $data['status'] ) : timetics_get_option( 'default_booking_status' );
        $location       = ! empty( $data['location'] ) ? sanitize_text_field( $data['location'] ) : '';
        $location_type  = ! empty( $data['location_type'] ) ? sanitize_text_field( $data['location_type'] ) : '';
        $description    = ! empty( $data['description'] ) ? sanitize_text_field( $data['description'] ) : '';
        $action         = $id ? 'updated' : 'created';

        $validate = $this->validate(
            $data, [
                'first_name',
                'email',
                'payment_method',
                'appointment',
                'start_date',
                'start_time',
                'end_time',
            ]
        );

        if ( is_wp_error( $validate ) ) {
            $data = [
                'status_code' => 403,
                'success'     => 0,
                'message'     => $validate->get_error_messages(),
            ];
            return new WP_HTTP_Response( $data, 403 );
        }

        $customer = new Customer();
        $meeting  = new Appointment( $appointment );
        $staff    = new Staff( $staff );
        $customer->make(
            [
                'first_name' => $first_name,
                'last_name'  => $last_name,
                'email'      => $email,
                'phone'      => $phone,
            ]
        );

        $booking       = new Booking( $id );
        $booking_entry = new Booking_Entry();

        $booking->set_props(
            [
                'customer'            => $customer->get_id(),
                'appointment'         => $meeting->get_id(),
                'staff'               => $staff->get_id(),
                'customer_fname'      => $customer->get_first_name(),
                'customer_lname'      => $customer->get_last_name(),
                'customer_email'      => $customer->get_email(),
                'customer_phone'      => $customer->get_phone(),
                'staff_fname'         => $staff->get_first_name(),
                'staff_lname'         => $staff->get_last_name(),
                'staff_email'         => $staff->get_email(),
                'meeting_name'        => $meeting->get_name(),
                'meeting_description' => $meeting->get_description(),
                'meeting_type'        => $meeting->get_type(),
                'description'         => $description,
                'start_date'          => $start_date,
                'date'                => $date,
                'end_date'            => $end_date,
                'start_time'          => $start_time,
                'end_time'            => $end_time,
                'order_total'         => $order_total,
                'post_status'         => $status,
                'location'            => $location,
                'location_type'       => $location_type,
            ]
        );

        $booking->save();

        // Create or update calendar event.
        if ( $id ) {
            if ( 'cancel' ===  $status ) {
                $booking->delete_event();
                $cancel_event_email = new Cancel_Event_Email( $booking );
                $cancel_event_email->send();
            } else {
                $booking->update_event();
                $update_event_email = new Update_Event_Email( $booking );
                $update_event_email->send();
            }
        } else {
            $booking->create_event();
            $new_event_email = new New_Event_Email( $booking );
            $new_event_email->send();
        }

        // Create booking schedule.
        $entries = $booking_entry->find(
            [
                'staff_id'   => $staff->get_id(),
                'meeting_id' => $meeting->get_id(),
                'date'       => $start_date,
                'start'      => $start_time,
            ]
        );

        if ( $entries ) {
            $entry  = $booking_entry->first();
            $booked = intval( $entry->get_booked() ) + 1;

            $booked_data = apply_filters( 'timetics_booking_update_schedule', $entry, ['booked' => $booked], $data );

            $entry->update( $booked_data );
        } else {
            $book_entry_data = [
                'meeting_id'  => $meeting->get_id(),
                'staff_id'    => $staff->get_id(),
                'customer_id' => $customer->get_id(),
                'booking_id'  => $booking->get_id(),
                'booked'      => 1,
                'date'        => $start_date,
                'start'       => $start_time,
                'end'         => $end_time,
            ];

            $book_entry_data = apply_filters( 'timetics_booking_schedule', $book_entry_data, $data );
            $booking_entry->create( $book_entry_data );
        }

        // Fire when booking is completed.
        do_action( 'timetics_after_booking_create', $booking->get_id(), $customer->get_id(), $meeting->get_id(), $data );

        $data = [
            'success'     => 1,
            'status_code' => 200,
            /* translators: Action */
            'message'     => sprintf( esc_html__( 'Successfully %s booking', 'timetics' ), $action ),
            'data'        => $this->prepare_item( $booking ),
        ];

        return new WP_HTTP_Response( $data, 200 );
    }

    /**
     * Prepare item for response
     *
     * @param   integer  $booking_id
     *
     * @return array
     */
    public function prepare_item( $booking_id ) {
        $booking     = new Booking( $booking_id );
        $appointment = new Appointment( $booking->get_appointment() );
        $staff       = new Staff( $booking->get_staff_id() );
        $customer    = new Customer( $booking->get_customer_id() );

        $start_date = gmdate( 'd F, Y', strtotime( $booking->get_start_date() ) );
        $end_date   = gmdate( 'd F, Y', strtotime( $booking->get_end_date() ) );
        $date       = gmdate( 'd F, Y', strtotime( $booking->get_date() ) );

        $response = [
            'id'            => $booking->get_id(),
            'random_id'     => $booking->get_random_id(),
            'status'        => $booking->get_status(),
            'order_total'   => $booking->get_total(),
            'start_date'    => $start_date,
            'end_date'      => $end_date,
            'date'          => $date,
            'start_time'    => $booking->get_start_time(),
            'end_time'      => $booking->get_end_time(),
            'location'      => $booking->get_location(),
            'location_type' => $booking->get_location_type(),
            'description'   => $booking->get_description(),
            'customer'      => [
                'id'         => $customer->get_id(),
                'full_name'  => $customer->get_display_name(),
                'first_name' => $customer->get_first_name(),
                'last_name'  => $customer->get_last_name(),
                'email'      => $customer->get_email(),
            ],
            'appointment'   => [
                'id'        => $appointment->get_id(),
                'name'      => $appointment->get_name(),
                'duration'  => $appointment->get_duration(),
                'type'      => $appointment->get_type(),
                'price'     => $appointment->get_price(),
                'locations' => $appointment->get_locations(),
                'timezone'  => $appointment->get_timezone(),
            ],
            'staff'         => [
                'id'         => $staff->get_id(),
                'full_name'  => $staff->get_display_name(),
                'first_name' => $staff->get_first_name(),
                'last_name'  => $staff->get_last_name(),
                'email_name' => $staff->get_email(),
                'phone'      => $staff->get_phone(),
                'image'      => $staff->get_image(),
            ],
        ];

        return apply_filters( 'timetics_booking_json_data', $response, $booking );
    }
}
