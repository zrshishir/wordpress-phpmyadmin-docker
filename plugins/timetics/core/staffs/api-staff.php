<?php
/**
 * Api Staff
 *
 * @package Timetics
 */
namespace Timetics\Core\Staffs;

use Timetics\Base\Api;
use Timetics\Core\Integrations\Google\Client;
use Timetics\Core\Staffs\Staff;
use Timetics\Utils\Singleton;
use WP_Error;
use WP_HTTP_Response;
use WP_User_Query;

/**
 * Class Api_Staff
 */
class Api_Staff extends Api {
    use Singleton;

    /**
     * Store namespace
     *
     * @var string
     */
    protected $namespace = 'timetics/v1';

    /**
     * Store rest base
     *
     * @var string
     */
    protected $rest_base = 'staffs';

    /**
     * Register rest route
     *
     * @return  void
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace, $this->rest_base, [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'get_items' ],
                    'permission_callback' => function () {
                        return true;
                    },
                ],
                [
                    'methods'             => \WP_REST_Server::CREATABLE,
                    'callback'            => [ $this, 'create_item' ],
                    'permission_callback' => function () {
                        return current_user_can( 'manage_timetics' );
                    },
                ],
                [
                    'methods'             => \WP_REST_Server::DELETABLE,
                    'callback'            => [ $this, 'bulk_delete' ],
                    'permission_callback' => function () {
                        return current_user_can( 'manage_timetics' );
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
            $this->namespace, '/' . $this->rest_base . '/(?P<staff_id>[\d]+)', [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'get_item' ],
                    'permission_callback' => function () {
                        return true;
                    },
                ],
                [
                    'methods'             => \WP_REST_Server::EDITABLE,
                    'callback'            => [ $this, 'update_item' ],
                    'permission_callback' => function () {
                        return current_user_can( 'manage_timetics' );
                    },
                ],
                [
                    'methods'             => \WP_REST_Server::DELETABLE,
                    'callback'            => [ $this, 'delete_item' ],
                    'permission_callback' => function () {
                        return current_user_can( 'manage_timetics' );
                    },
                ],
            ]
        );

        register_rest_route(
            $this->namespace, $this->rest_base . '/search', [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'search_items' ],
                    'permission_callback' => function () {
                        return current_user_can( 'edit_posts' );
                    },
                ],
            ]
        );

        register_rest_route(
            $this->namespace, $this->rest_base . '/(?P<staff_id>[\d]+)/integrations', [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'get_integrations' ],
                    'permission_callback' => function () {
                        return current_user_can( 'edit_posts' );
                    },
                ],
            ]
        );

        register_rest_route(
            $this->namespace, $this->rest_base . '/(?P<staff_id>[\d]+)/integrations/auth-revoke', [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [ $this, 'auth_revoke' ],
                    'permission_callback' => function () {
                        return current_user_can( 'edit_posts' );
                    },
                ],
            ]
        );
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

        $staff = Staff::all(
            [
                'number' => $per_page,
                'paged'  => $paged,
            ]
        );

        $items = [];

        foreach ( $staff['items'] as $item ) {
            $items[] = $this->prepare_item( $item->ID );
        }

        $data = [
            'success' => 1,
            'data'    => [
                'total' => $staff['total'],
                'items' => $items,
            ],
        ];

        return rest_ensure_response( $data );
    }

    /**
     * Get single staff
     *
     * @param   WP_Rest_Requesr  $request
     *
     * @return  JSON Single staff data
     */
    public function get_item( $request ) {
        $staff_id = (int) $request['staff_id'];
        $staff    = new Staff( $staff_id );

        if ( ! $staff->is_staff() ) {
            return [
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid staff id.', 'timetics' ),
                'data'        => [],
            ];
        }

        $response = [
            'status_code' => 200,
            'data'        => $this->prepare_item( $staff ),
        ];

        return rest_ensure_response( $response );
    }

    /**
     * Search staff
     *
     * @return JSON
     */
    public function search_items( $request ) {

        // Prepare search args.
        $per_page = ! empty( $request['per_page'] ) ? intval( $request['per_page'] ) : 20;
        $paged    = ! empty( $request['paged'] ) ? intval( $request['paged'] ) : 1;
        $search   = ! empty( $request['search'] ) ? sanitize_text_field( $request['search'] ) : '';

        // Get search.
        $users = new WP_User_Query(
            array(
                'role'   => 'timetics-staff',
                'number' => $per_page,
                'paged'  => $paged,

                // @codingStandardsIgnoreStart
                'meta_query' => array(
                    'relation' => 'OR',
                    array(
                        'key'     => 'first_name',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => 'last_name',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_staff_email',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_staff_user_name',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                    array(
                        'key'     => '_staff_phone',
                        'value'   => $search,
                        'compare' => 'LIKE',
                    ),
                ),
                // @codingStandardsIgnoreEnd
            )
        );

        // Prepare items for response.
        $items = [];

        foreach ( $users->get_results() as $item ) {
            $items[] = $this->prepare_item( $item->ID );
        }

        $data = [
            'success' => 1,
            'status'  => 200,
            'data'    => [
                'total' => $users->get_total(),
                'items' => $items,
            ],
        ];

        return rest_ensure_response( $data );
    }

    /**
     * Create staff
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON | WP_Error
     */
    public function create_item( $request ) {
        return $this->save_staff( $request );
    }

    /**
     * Update staff
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON | WP_Error
     */
    public function update_item( $request ) {
        $staff_id = (int) $request['staff_id'];
        $staff    = new Staff( $staff_id );

        if ( ! $staff->is_staff() ) {
            $data = [
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid staff id.', 'timetics' ),
                'data'        => [],
            ];

            return new WP_HTTP_Response( $data, 404 );
        }

        return $this->save_staff( $request, $staff_id );
    }

    /**
     * Delete staff
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON
     */
    public function delete_item( $request ) {
        $staff_id = (int) $request['staff_id'];
        $staff    = new Staff( $staff_id );

        if ( ! $staff->is_staff() ) {
            $data = [
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid staff id.', 'timetics' ),
                'data'        => [],
            ];

            return new WP_HTTP_Response( $data, 404 );
        }

        $staff->delete();

        $response = [
            'status_code' => 200,
            'message'     => esc_html__( 'Successfully deleted staff', 'timetics' ),
            'data'        => [],
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
        $staffs = json_decode( $request->get_body(), true );

        foreach ( $staffs as $staff ) {
            $staff = new Staff( $staff );

            if ( ! $staff->is_staff() ) {
                $data = [
                    'success' => 1,
                    'status'  => 404,
                    'message' => esc_html__( 'Invalid staff id.', 'timetics' ),
                    'data'    => [],
                ];

                return new WP_HTTP_Response( $data, 404 );
            }

            $staff->delete();
        }

        return [
            'success' => 1,
            'status'  => 200,
            'message' => esc_html__( 'Successfully deleted staff', 'timetics' ),
            'data'    => [
                'items' => $staffs,
            ],
        ];
    }

    /**
     * Get staff integrations
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON
     */
    public function get_integrations( $request ) {
        $staff_id = (int) $request['staff_id'];
        $staff    = new Staff( $staff_id );

        if ( ! $staff->is_staff() ) {
            $data = [
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid staff id.', 'timetics' ),
                'data'        => [],
            ];

            return new WP_HTTP_Response( $data, 404 );
        }

        $integrations = timetics_get_staff_integrations( $staff_id );

        return rest_ensure_response( $integrations );
    }

    /**
     * Remove staff authentication for integrations
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON
     */
    public function auth_revoke( $request ) {
        $staff_id    = (int) $request['staff_id'];
        $staff       = new Staff( $staff_id );
        $integration = ! empty( $request['integration_name'] ) ? sanitize_text_field( $request['integration_name'] ) : '';

        if ( ! $staff->is_staff() ) {
            $data = [
                'status_code' => 404,
                'message'     => esc_html__( 'Invalid staff id.', 'timetics' ),
                'data'        => [],
            ];

            return new WP_HTTP_Response( $data, 404 );
        }

        $token  = timetics_get_google_access_token( $staff_id );
        $client = new Client();

        if ( 'google-auth' === $integration ) {
            $revoked = $client->revoke( $token );

            if ( ! $revoked ) {
                $data = [
                    'success'     => 0,
                    'status_code' => 409,
                    'message'     => esc_html__( 'Something went wrong, please try again', 'timetics' ),
                ];

                return new WP_HTTP_Response( $data, 409 );
            }

            update_user_meta( $staff_id, 'timetics_google_auth_code', '' );
        }

        return [
            'success'     => 1,
            'status_code' => 200,
            'message'     => esc_html__( 'Successfully disconnected', 'timetics' ),
        ];
    }

    /**
     * Save staff
     *
     * @param   WP_Rest_Request  $request
     * @param   integer  $id       [$id description]
     *
     * @return  JSON | WP_Error
     */
    public function save_staff( $request, $id = 0 ) {
        $data = json_decode( $request->get_body(), true );

        $first_name = ! empty( $data['first_name'] ) ? sanitize_text_field( $data['first_name'] ) : '';
        $last_name  = ! empty( $data['last_name'] ) ? sanitize_text_field( $data['last_name'] ) : '';
        $email      = ! empty( $data['email'] ) ? $data['email'] : '';
        $phone      = ! empty( $data['phone'] ) ? $data['phone'] : '';
        $service    = ! empty( $data['service'] ) ? $data['service'] : [];
        $schedule   = ! empty( $data['schedule'] ) ? $data['schedule'] : [];
        $image      = ! empty( $data['image'] ) ? intval( $data['image'] ) : '';
        $password   = ! empty( $data['password'] ) ? sanitize_text_field( $data['password'] ) : '';
        $action     = $id ? 'updated' : 'created';

        // Validate input data.
        $validate = $this->validate(
            $data, [
                'first_name',
                'last_name',
                'email',
            ]
        );

        if ( is_wp_error( $validate ) ) {
            $data = [
                'success'     => 0,
                'status_code' => 409,
                'message'     => $validate->get_error_messages(),
                'data'        => [],
            ];

            return new WP_HTTP_Response( $data, 409 );
        }

        // Save staff data.
        $staff = new Staff( $id );

        $args = [
            'first_name' => $first_name,
            'last_name'  => $last_name,
            'user_email' => $email,
            'user_login' => $this->generate_username( $email ),
            'phone'      => $phone,
            'image'      => $image,
            'schedule'   => $schedule,
            'user_pass'  => $password,
        ];

        if ( $id ) {
           $staff_id = $staff->update( $args );
        } else {
            $staff_id = $staff->create( $args );
        }

        if ( is_wp_error( $staff_id ) ) {
            return [
                'success' => 0,
                'status'  => 409,
                'message' => $staff_id->get_error_message(),
                'data'    => [],
            ];
        }
        // Prepare for response.
        $item = $this->prepare_item( $staff );

        $data = [
            'success' => 1,
            'status'  => 200,
            /* translators: Action */
            'message' => sprintf( esc_html__( 'Successfully %s staff', 'timetics' ), $action ),
            'data'    => $item,
        ];

        return rest_ensure_response( $data );
    }

    /**
     * Generate username from email
     *
     * @param   string  $email
     *
     * @return  string
     */
    public function generate_username( $email ) {
        $username = strtok( $email, '@' );

        if ( username_exists( $username ) ) {
            $username = $username . wp_rand( 10, 100 );
        }

        return $username;
    }

    /**
     * Prepare item
     *
     * @param   integer | Staff  $staff_id  Staff Id
     *
     * @return  array staff data
     */
    public function prepare_item( $staff ) {
        $staff = new Staff( $staff );

        return $staff->get_data();
    }

}
