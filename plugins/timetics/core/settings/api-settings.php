<?php
/**
 * Class Api Settings
 *
 * @package Timetics
 */
namespace Timetics\Core\Settings;

use Timetics\Base\Api;
use Timetics\Utils\Singleton;

class Api_Settings extends Api {
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
    protected $rest_base = 'settings';

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
					'callback'            => [ $this, 'get_settings' ],
					'permission_callback' => function () {
						return true;
					},
				],
				[
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => [ $this, 'update_settings' ],
					'permission_callback' => function () {
						return true;
					},
				],
			]
        );
    }

    /**
     * Get settings
     *
     * @return  JSON
     */
    public function get_settings() {
        $settings = timetics_get_settings();

        $data = [
            'status_code' => 200,
            'success'   => 1,
            'message'   => esc_html__( 'Get all settings', 'timetics' ),
            'data'      => $settings,
        ];

        return rest_ensure_response( $settings );
    }

    /**
     * Update settings
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  JSON
     */
    public function update_settings( $request ) {
        $options = json_decode( $request->get_body(), true );

        if ( $options ) {
            foreach ( $options as $key => $value ) {
                timetics_update_option( $key, $value );
            }
        }

        $data = [
            'status_code'   => 200,
            'success' => 1,
            'message' => esc_html__( 'Settings successfully updated', 'timetics' ),
            'data'    => timetics_get_settings(),
        ];

        return rest_ensure_response( $data );
    }
}
