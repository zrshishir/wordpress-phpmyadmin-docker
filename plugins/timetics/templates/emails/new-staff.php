<main class="email-wrapper">
    <div class="email-title"><h3><?php esc_html_e( 'You\'re almost there!', 'timetics' ); ?></h3></div>
    <div class="email-content">
        <p class="greeting">Hello, <?php echo esc_html( $user_login ); ?></p>
        <p>
        <?php
        esc_html_e(
            'We\'re excited to have you on board! Your\'are juste a few
            steps away from setting up your first booking page.All
            that\'s left to do is verify your email address and set a
            password', 'timetics'
        );
		?>
        </p>
        <button class="verify-button">
            <a href="<?php echo esc_url( $reset_url ); ?>"><?php esc_html_e( 'Verify email and get started', 'timetics' ); ?></a>
        </button>
        <p><?php esc_html_e( 'This link is valid for 24 hours', 'timetics' ); ?></p>
    </div>
</main>
