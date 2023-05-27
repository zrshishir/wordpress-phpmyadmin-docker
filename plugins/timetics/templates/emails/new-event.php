<?php
    $staff_name     = $this->staff->get_display_name();
    $customer_name  = $this->customer->get_display_name();
    $customer_email = $this->customer->get_email();
    $title          = $this->get_title();
    $description    = $this->meeting->get_description();
    $location       = $this->booking->get_location();
    $location_type  = $this->booking->get_location_type();

    $event     = $this->booking->get_event();
    $join_link = 'google-meet' === $location_type && ! empty( $event['hangoutLink'] ) ? $event['hangoutLink'] : '';
    $timezone  = $event ? $event['start']['timeZone'] : '';
    $timestr   = $event ? strtotime( $event['start']['dateTime'] ) : '';

    $day  = gmdate( 'l', strtotime( $this->booking->get_start_date() ) );
    $time = gmdate( 'h:i a', strtotime( $this->booking->get_start_time() ) );
    $date = gmdate( 'd F Y', strtotime( $this->booking->get_start_date() ) );

    $email_body  = timetics_get_option( 'booking_created_host_email_body' );
    $email_title = timetics_get_option( 'booking_created_host_email_title' );
    $email_title = ! empty( $email_title ) ? $email_title : $this->get_title();

    $placeholders = [
        '{%meeting_title%}'    => $this->meeting->name,
        '{%meeting_date%}'     => $date,
        '{%meeting_time%}'     => $time,
        '{%meeting_location%}' => $location,
        '{%meeting_duration%}' => $this->meeting->duration,
        '{%host_name%}'        => $staff_name,
        '{%host_email%}'       => $this->staff->get_email(),
        '{%customer_name%}'    => $customer_name,
        '{%customer_email%}'   => $customer_email,
    ];
?>

<main class="email-wrapper">
    <div class="email-title"><h3><?php echo esc_html( timetics_replace_placeholder( $email_title, $placeholders ) ); ?></h3></div>

    <div class="email-content">
        <?php if ( $email_body ): ?>
            <?php echo timetics_replace_placeholder( $email_body, $placeholders ); ?>
            <?php if ( 'virtual' === $location_type && $join_link ): ?>
            <p><?php esc_html_e( 'Location: This is a Google Meet web conference.', 'timetics' );?>
            </p>
            <span><a href="<?php echo esc_url( $join_link ); ?>"><?php esc_html_e( 'Join Now', 'timetics' );?></a></span>
            <?php endif;?>

        <?php else: ?>
        <p class="greeting">
            <?php printf( esc_html__( 'Hi %s', 'timetics' ), esc_html( $staff_name ) );?>
        </p>
        <p><?php esc_attr_e( 'A new meeting has been scheduled', 'timetics' );?></p>
        <p>
            <?php printf( '%s %s', esc_html__( 'Invitee:', 'timetics' ), esc_html( $customer_name ) );?>
            <br>
            <?php printf( '%s %s', esc_html__( 'Invitee Email:', 'timetics' ), esc_html( $customer_email ) );?>
        </p>
        <p>
            <?php printf( esc_html__( 'Meeting Date/Time: %s - %s, %s %s', 'timetics' ), esc_html( $time ), esc_html( $day ), esc_html( $date ), esc_html( $timezone ) );?>
        </p>
        <p>
            <?php printf( '%s %s', esc_html__( 'Description:', 'timetics' ), esc_html( $description ) );?>
        </p>

        <?php if ( 'virtual' === $location_type && $join_link ): ?>
        <p><?php esc_html_e( 'Location: This is a Google Meet web conference.', 'timetics' );?>
        </p>
        <span><a href="<?php echo esc_url( $join_link ); ?>"><?php esc_html_e( 'Join Now', 'timetics' );?></a></span>
        <?php endif;?>
        <p>
            <?php printf( '%s %s', esc_html__( 'Invitee Time Zone:', 'timetics' ), esc_html( $timezone ) );?>
        </p>
        <?php endif;?>
    </div>
</main>
