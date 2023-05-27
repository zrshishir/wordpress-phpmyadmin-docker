<?php
/**
 * Api reports class
 *
 * @package Timetics
 */

namespace Timetics\Core\Reports;

use Timetics\Base\Api;
use Timetics\Utils\Singleton;

/**
 * Class Api Reports
 */
class Api_Report extends Api  {
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
    protected $rest_base = 'reports';

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
            $this->namespace, $this->rest_base . '/overview', [
                [
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => [$this, 'get_overview'],
                    'permission_callback' => function () {
                        return current_user_can( 'manage_timetics' );
                    },
                ],
            ]
        );
    }

    /**
     * Get overview
     *
     * @param   WP_Rest_Request
     *
     * @return  JSON
     */
    public function get_overview( $request ) {
        $start_date = isset( $request['start_date'] ) ? sanitize_text_field( $request['start_date'] ) : '';

        $end_date = isset( $request['end_date'] ) ? sanitize_text_field( $request['end_date'] ) : '';

        $data = [
            'total_meetings' => timetics_count_posts( ['post_type' => 'timetics-appointment'] ),
            'total_bookings' => timetics_count_posts( ['post_type' => 'timetics-booking', 'post_status'=>'approved'] ),
            'total_sales'    => number_format(timetics_get_total_sale(), 2),
            'total_customer' => timetics_count_users( ['role' => 'timetics-customer'] ),
            'total_staff'    => timetics_count_users( ['role' => 'timetics-staff'] ),
        ];

        $response = [
            'status_code' => 200,
            'success'     => 1,
            'data'        => $data,
        ];

        return rest_ensure_response( $response );
    }
}
