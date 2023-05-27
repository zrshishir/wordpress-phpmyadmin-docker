<?php
/**
 * Apointment api
 *
 * @since 1.0.0
 *
 * @package Timetics
 */
namespace Timetics\Core\Appointments;

use Timetics\Base\Api;
use Timetics\Core\Appointments\Appointment;
use Timetics\Utils\Singleton;
use WP_HTTP_Response;
use WP_REST_Request;

/**
 * Api_Appointment class
 *
 * @since 1.0.0
 */
class Api_Appointment extends Api {

    use Singleton;

    /**
     * Store api namespace
     *
     * @since 1.0.0
     *
     * @var string $namespace
     */
    protected $namespace = 'timetics/v1';

    /**
     * Store rest base
     *
     * @since 1.0.0
     *
     * @var string $rest_base
     */
    protected $rest_base = 'appointments';

    /**
     * Register rest routes.
     *
     * @since 1.0.0
     *
     * @return  void
     */
    public function register_routes() {
        /*
         * Register route
         */
        register_rest_route( $this->namespace, $this->rest_base, [
            [
                'methods'             => \WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_items'],
                'permission_callback' => function () {
                    return true;
                },
            ],
            [
                'methods'             => \WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'create_item'],
                'permission_callback' => function () {
                    return current_user_can( 'edit_meeting' );
                },
            ],
            [
                'methods'             => \WP_REST_Server::DELETABLE,
                'callback'            => [$this, 'bulk_delete'],
                'permission_callback' => function () {
                    return current_user_can( 'edit_meeting' );
                },
            ],
        ] );

        /**
         * Register route
         *
         * @var void
         */
        register_rest_route( $this->namespace, '/' . $this->rest_base . '/(?P<appointment_id>[\d]+)', [
            [
                'methods'             => \WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_item'],
                'permission_callback' => function () {
                    return true;
                },
            ],
            [
                'methods'             => \WP_REST_Server::EDITABLE,
                'callback'            => [$this, 'update_item'],
                'permission_callback' => function () {
                    return current_user_can( 'edit_meeting' );
                },
            ],
            [
                'methods'             => \WP_REST_Server::DELETABLE,
                'callback'            => [$this, 'delete_item'],
                'permission_callback' => function () {
                    return current_user_can( 'edit_meeting' );
                },
            ],
        ] );

        register_rest_route( $this->namespace, $this->rest_base . '/search', [
            [
                'methods'             => \WP_REST_Server::READABLE,
                'callback'            => [$this, 'search_items'],
                'permission_callback' => function () {
                    return current_user_can( 'edit_posts' );
                },
            ],
        ] );

        register_rest_route( $this->namespace, $this->rest_base . '/filter', [
            [
                'methods'             => \WP_REST_Server::READABLE,
                'callback'            => [$this, 'filter_items'],
                'permission_callback' => function () {
                    return current_user_can( 'edit_posts' );
                },
            ],
        ] );

        register_rest_route( $this->namespace, '/' . $this->rest_base . '/(?P<appointment_id>[\d]+)' . '/duplicate', [
            [
                'methods'             => \WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'duplicate_item'],
                'permission_callback' => function () {
                    return current_user_can( 'edit_meeting' );
                },
            ],
        ] );
    }

    /**
     * Get all appointments
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON
     */
    public function get_items( $request ) {

        $per_page = ! empty( $request['per_page'] ) ? intval( $request['per_page'] ) : 20;
        $paged    = ! empty( $request['paged'] ) ? intval( $request['paged'] ) : 1;
        $type     = ! empty( $request['type'] ) ? sanitize_text_field( $request['type'] ) : '';

        $args = [
            'posts_per_page' => $per_page,
            'paged'          => $paged,
            'type'           => $type,
        ];

        if ( ! current_user_can( 'edit_meeting' ) ) {
            $args['staff'] = get_current_user_id();
        }

        $appoint = Appointment::all( $args );

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
     * Search appointment
     *
     * @param   Object  $request
     *
     * @return JSON
     */
    public function search_items( $request ) {
        // Prepare search args.
        $per_page = ! empty( $request['per_page'] ) ? intval( $request['per_page'] ) : 20;
        $paged    = ! empty( $request['paged'] ) ? intval( $request['paged'] ) : 1;
        $search   = ! empty( $request['search'] ) ? sanitize_text_field( $request['search'] ) : '';

        // Get search.
        $appointments = new \WP_Query(
            array(
                'post_type'      => 'timetics-appointment',
                'posts_per_page' => $per_page,
                'paged'          => $paged,
                'orderby'        => 'ID',
                'order'          => 'DESC',

                // @codingStandardsIgnoreStart
                'meta_query' => array(
                    'relation' => 'OR',
                    array(
                        'key'     => '_tt_apointment_name',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_apointment_type',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_apointment_description',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_apointment_location',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_apointment_duration',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_tt_apointment_schedule',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                ),
                // @codingStandardsIgnoreEnd
            )
        );

        // Prepare items for response.
        $items = [];

        foreach ( $appointments->posts as $item ) {
            $items[] = $this->prepare_item( $item->ID );
        }

        $data = [
            'success' => 1,
            'status'  => 200,
            'data'    => [
                'total' => $appointments->found_posts,
                'items' => $items,
            ],
        ];

        return rest_ensure_response( $data );
    }

    public function filter_items( $request ) {
        $per_page   = ! empty( $request['per_page'] ) ? intval( $request['per_page'] ) : 20;
        $paged      = ! empty( $request['paged'] ) ? intval( $request['paged'] ) : 1;
        $staff      = ! empty( $request['staff_id'] ) ? intval( $request['staff_id'] ) : 0;
        $visibility = ! empty( $request['visibility'] ) ? sanitize_text_field( $request['visibility'] ) : 'enabled';

        $per_page = ! empty( $request['per_page'] ) ? intval( $request['per_page'] ) : 20;
        $paged    = ! empty( $request['paged'] ) ? intval( $request['paged'] ) : 1;

        $appoint = Appointment::all( [
            'posts_per_page' => $per_page,
            'paged'          => $paged,
            'visibility'     => $visibility,
            'staff'          => $staff,
        ] );

        $items = [];

        foreach ( $appoint['items'] as $item ) {
            $items[] = $this->prepare_item( $item->ID );
        }

        $data = [
            'success' => 1,
            'status'  => 200,
            'data'    => [
                'total' => $appoint['total'],
                'items' => $items,
            ],
        ];

        return rest_ensure_response( $data );
    }

    /**
     * Create appointment
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON Newly created appointment data
     */
    public function create_item( $request ) {
        return $this->save_appointment( $request );
    }

    /**
     * Update appointment
     *
     * @param   WP_Rest_Request  $request
     *
     * @return JSON  Updated appointment data
     */
    public function update_item( $request ) {
        $appointment_id = (int) $request['appointment_id'];
        $appoint        = new Appointment( $appointment_id );

        if ( ! $appoint->is_appointment() ) {

            $data = [
                'success'     => 0,
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid appointment id.', 'timetics' ),
                'data'        => [],
            ];

            return new WP_HTTP_Response( $data, 404 );
        }

        return $this->save_appointment( $request, $appointment_id );
    }

    /**
     * Get single appointment
     *
     * @param   WP_Rest_Requesr  $request
     *
     * @return  JSON Single appointment data
     */
    public function get_item( $request ) {
        $appoinment_id = (int) $request['appointment_id'];
        $appoint       = new Appointment( $appoinment_id );

        if ( ! $appoint->is_appointment() ) {

            $data = [
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid appointment id.', 'timetics' ),
                'data'        => [],
            ];

            return new WP_HTTP_Response( $data, 404 );
        }

        $response = [
            'status_code' => 200,
            'message'     => esc_html__( 'Successfully retrieved appointments', 'timetics' ),
            'data'        => $this->prepare_item( $appoint ),
        ];

        return rest_ensure_response( $response );
    }

    /**
     * Delete single appointment
     *
     * @param   WP_Rest_Request  $request
     *
     * @return
     */
    public function delete_item( $request ) {
        $appoinment_id = (int) $request['appointment_id'];
        $appoint       = new Appointment( $appoinment_id );

        if ( ! $appoint->is_appointment() ) {
            return [
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid appointment id.', 'timetics' ),
                'data'        => [],
            ];
        }

        $appoint->delete();

        $response = [
            'status_code' => 201,
            'message'     => esc_html__( 'Successfully deleted appointment', 'timetics' ),
            'data'        => [
                'item' => $appoinment_id,
            ],
        ];

        return rest_ensure_response( $response );
    }

    /**
     * Delete multiples
     *
     * @param   WP_Rest_Request  $request
     *
     * @return JSON
     */
    public function bulk_delete( $request ) {
        $appointments = json_decode( $request->get_body(), true );

        foreach ( $appointments as $appoint ) {
            $appoint = new Appointment( $appoint );

            if ( ! $appoint->is_appointment() ) {
                $data = [
                    'success' => 0,
                    'status'  => 404,
                    'message' => esc_html__( 'Invalid appointment id.', 'timetics' ),
                    'data'    => [],
                ];

                return new WP_HTTP_Response( $data, 404 );
            }

            $appoint->delete();
        }

        return rest_ensure_response( [
            'success' => 1,
            'status'  => 201,
            'message' => esc_html__( 'Successfully deleted all appointments', 'timetics' ),
            'data'    => [
                'items' => $appointments,
            ],
        ] );
    }

    /**
     * Duplicate appointment
     *
     * @since 1.0.0
     *
     * @param object $request
     *
     * @return  JSON
     */
    public function duplicate_item( $request ) {
        $appoinment_id = (int) $request['appointment_id'];
        $appoint       = new Appointment( $appoinment_id );

        if ( ! $appoint->is_appointment() ) {
            return new WP_HTTP_Response(
                [
                    'success'     => 0,
                    'status_code' => 404,
                    'message'     => esc_html__( 'Invalid appointment id.', 'timetics' ),
                    'data'        => [],
                ],
                404
            );
        }

        $appoint->duplicate();

        $item = $this->prepare_item( $appoint );

        $response = [
            'success'     => 1,
            'status_code' => 201,
            'message'     => esc_html__( 'Successfully duplicated appointment', 'timetics' ),
            'data'        => $item,
        ];

        return rest_ensure_response( $response );
    }

    /**
     * Save appointment
     *
     * @param   WP_Rest_Request  $request
     * @param   integer  $id     Appointment id
     *
     * @return  JSON  Updated appoitment data
     */
    public function save_appointment( $request, $id = 0 ) {
        $appoint = new Appointment( $id );

        $data = json_decode( $request->get_body(), true );

        $data = apply_filters( 'timetics_meeting_data', $data );

        $name          = ! empty( $data['name'] ) ? sanitize_text_field( $data['name'] ) : $appoint->get_name();
        $type          = ! empty( $data['type'] ) ? sanitize_text_field( $data['type'] ) : $appoint->get_type();
        $description   = ! empty( $data['description'] ) ? sanitize_text_field( $data['description'] ) : '';
        $staff         = ! empty( $data['staff'] ) ? array_map( 'intval', $data['staff'] ) : $appoint->get_staff();
        $locations     = ! empty( $data['locations'] ) ? $data['locations'] : $appoint->get_locations();
        $duration      = ! empty( $data['duration'] ) ? sanitize_text_field( $data['duration'] ) : '';
        $schedule      = ! empty( $data['schedule'] ) ? $data['schedule'] : $appoint->get_schedule();
        $price         = ! empty( $data['price'] ) ? $data['price'] : '';
        $categories    = ! empty( $data['categories'] ) ? $data['categories'] : '';
        $buffer_time   = ! empty( $data['buffer_time'] ) ? $data['buffer_time'] : '';
        $timezone      = ! empty( $data['timezone'] ) ? $data['timezone'] : '';
        $availability  = ! empty( $data['availability'] ) ? $data['availability'] : '';
        $visibility    = ! empty( $data['visibility'] ) ? strtolower( $data['visibility'] ) : 'enabled';
        $notifications = ! empty( $data['notifications'] ) ? $data['notifications'] : '';
        $fleunt_crm_webhook = ! empty( $data['fleunt_crm_webhook'] ) ? $data['fleunt_crm_webhook'] : '';
        $capacity      = ! empty( $data['capacity'] ) ? intval( $data['capacity'] ) : 1;
        $action        = $id ? 'update' : 'created';

        $validate_data = [
            'name'      => $name,
            'type'      => $type,
            'locations' => $locations,
            'schedule'  => $schedule,
            'staff'     => $staff,

        ];
        // Validate input data.
        $validate = $this->validate( $validate_data, [
            'name',
            'type',
            'locations',
            'schedule',
            'staff',
        ] );

        if ( is_wp_error( $validate ) ) {
            $data = [
                'status_code' => 409,
                'success'     => 0,
                'message'     => $validate->get_error_messages(),
                'data'        => [],
            ];

            return new WP_HTTP_Response( $data, 409 );
        }

        // Save appointment.
        $appointment_data = [
            'name'          => $name,
            'description'   => $description,
            'type'          => $type,
            'locations'     => $locations,
            'staff'         => $staff,
            'duration'      => $duration,
            'price'         => $price,
            'capacity'      => $capacity,
            'schedule'      => $schedule,
            'categories'    => $categories,
            'timezone'      => $timezone,
            'availability'  => $availability,
            'visibility'    => $visibility,
            'buffer_time'   => $buffer_time,
            'notifications' => $notifications,
            'fleunt_crm_webhook' => $fleunt_crm_webhook,

        ];

        $appointment_data = apply_filters( 'timetics_meeting_insert_data', $data, $appointment_data );

        $appoint->set_props( $appointment_data );
        $appoint->save();

        do_action( 'timetics_meeting_after_insert', $appoint, $data );

        // Prepare response data.
        $item = $this->prepare_item( $appoint );

        $response = [
            'status_code' => 201,
            'success'     => 1,
            'message'     => sprintf( esc_html__( 'Succssfully %s appointment', 'timetics' ), $action ),
            'data'        => $item,
        ];

        return rest_ensure_response( $response );
    }

    /**
     * Prepare item for response
     *
     * @param   integer  $appoinment_id
     *
     * @return  array
     */
    public function prepare_item( $appoint_id ) {
        $appointment   = new Appointment( $appoint_id );
        $dulicate      = $appointment->get_duplicate_nuber();
        $dulicate_text = $dulicate ? ' -Duplicate' : '';
        $data = [
            'id'            => $appointment->get_id(),
            'name'          => $appointment->get_name() . $dulicate_text,
            'image'         => $appointment->get_image(),
            // 'link'        => $appointment->get_link(),
            'description'   => $appointment->get_description(),
            'type'          => $appointment->get_type(),
            'locations'     => $appointment->get_locations(),
            'schedule'      => $appointment->get_schedule(),
            'price'         => $appointment->get_price(),
            'categories'    => $appointment->get_categories(),
            'staff'         => $appointment->get_staff(),
            'buffer_time'   => $appointment->get_buffer_time(),
            'timezone'      => $appointment->get_timezone(),
            'availability'  => $appointment->get_availability(),
            'visibility'    => $appointment->get_visibility(),
            'duration'      => $appointment->get_duration(),
            'notifications' => $appointment->get_notifications(),
            'capacity'      => $appointment->get_capacity(),
            'fleunt_crm_webhook'=> $appointment->get_fleunt_crm_webhook(),
        ];

        return apply_filters( 'timetics_meeting_json_data', $data, $appointment );
    }

}
