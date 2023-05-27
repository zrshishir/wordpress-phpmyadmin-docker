<?php
/**
 * Shortcode class
 *
 * @package Timetics
 */

namespace Timetics\Core\Frontend;

use Timetics\Utils\Singleton;
use Timetics;

/**
 * Class Shortcode
 */
class Shortcode {
    use Singleton;

    /**
     * Initialize the shortcode class
     *
     * @return  void
     */
    public function init() {
        // [timetics-booking-form id='']
        add_shortcode( 'timetics-booking-form', [ $this, 'booking_form' ] );

        // [timetics-meeting-list limit='']
        add_shortcode( 'timetics-meeting-list', [ $this, 'meeting_list' ] );

        if ( class_exists( 'Wpeventin' ) ) {
            add_action( 'init', [ $this, 'eventin_seat_plan' ] );
        }
    }

    /**
     * booking form for frontend
     *
     * @return void
     */
    public function booking_form( $attribute ) {
        wp_enqueue_style( 'timetics-vendor' );
        wp_enqueue_style( 'timetics-frontend' );
        wp_enqueue_script( 'timetics-antd-scripts' );
        wp_enqueue_script( 'timetics-flatpickr-scripts' );
        wp_enqueue_script( 'timetics-frontend-scripts' );

        $id            = isset( $attribute['id'] ) ? $attribute['id'] : '';
        $data_controls = [
            'id' => $id,
        ];
        $controls      = json_encode( $data_controls );

        ob_start();
        ?>
        <div class="timetics-shortcode-wrapper">
            <div class="timetics-single-booking-wrapper"
                 data-controls="<?php echo esc_attr( $controls ); ?>"></div>
        </div>
        <?php
        return ob_get_clean();
    }

    public function eventin_seat_plan() {
        wp_enqueue_style( 'timetics-vendor' );
        wp_enqueue_style( 'timetics-frontend' );
        wp_enqueue_script( 'timetics-antd-scripts' );
        wp_enqueue_script( 'timetics-flatpickr-scripts' );
        wp_enqueue_script( 'timetics-frontend-scripts' );
    }

    /**
     * booking form for frontend
     *
     * @return void
     */
    public function meeting_list( $attribute ) {
        wp_enqueue_style( 'timetics-vendor' );
        wp_enqueue_style( 'timetics-frontend' );
        wp_enqueue_script( 'timetics-antd-scripts' );
        wp_enqueue_script( 'timetics-flatpickr-scripts' );
        wp_enqueue_script( 'timetics-frontend-scripts' );

        $limit = isset( $attribute['limit'] ) ? $attribute['limit'] : '';

        ob_start();
        ?>
        <div class="timetics-shortcode-wrapper">
            <div class="timetics-meeting-list-wrapper">
                <?php
                if ( file_exists( TIMETICS_PLUGIN_DIR . 'core/frontend/templates/meeting-list.php' ) ) {
                    require_once TIMETICS_PLUGIN_DIR . 'core/frontend/templates/meeting-list.php';
                }
                ?>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
}
