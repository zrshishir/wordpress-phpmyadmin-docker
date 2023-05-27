<?php
/**
 * Global settings for timetics
 *
 * @package Timetics
 */

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'timetics_get_option' ) ) {
    /**
     * Get option for timetics
     *
     * @since 1.0.0
     * @return  mixed
     */
    function timetics_get_option( $key = '', $default = false ) {
        $options = get_option( 'timetics_settings' );
         $value = $default;

        if ( isset( $options[ $key ] ) ) {
            $value = ! empty( $options[ $key ] ) ? $options[ $key ] : $default;
        }

        return $value;
    }
}

if ( ! function_exists( 'timetics_update_option' ) ) {

    /**
     * Update option
     *
     * @param   string  $key
     *
     * @since 1.0.0
     *
     * @return  boolean
     */
    function timetics_update_option( $key = '', $value = false ) {
        if ( ! $key ) {
            return false;
        }

        // Get the current settings.
        $options = get_option( 'timetics_settings', [] );

        // Set new settings value.
        $options[ $key ] = $value;

        // Update the settings.
        $did_update = update_option( 'timetics_settings', $options );

        return $did_update;
    }
}

if ( ! function_exists( 'timetics_get_settings' ) ) {

    /**
     * Get settings
     *
     * Retrieve all plugin settings
     *
     * @since 1.0.0
     *
     * @return  array Timetics Settings
     */
    function timetics_get_settings() {
        // Get the option key.
        $settings = get_option( 'timetics_settings' );

        return apply_filters( 'timetics_get_settings', $settings );
    }
}
