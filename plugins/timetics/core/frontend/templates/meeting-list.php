<?php

use Timetics\Core\Appointments\Appointment as Appointment;

$meetings = Appointment::all();

?>

<div class="tt-meeting-list-wrapper ant-row">
    <?php
    foreach ($meetings['items'] as  $item) {
        $meeting = new Appointment($item->ID);
        $staffs   = $meeting->get_staff();
        $locations = $meeting->get_locations();
        $id = $meeting->get_id();
        $prices = $meeting->get_price();
    ?>
        <div class="ant-col-8 ant-col-xs-24 ant-col-md-8">
            <div class="tt-meeting-list-item">
                <ul class="tt-author">
                    <?php
                    if (!empty($staffs)) {
                        foreach ($staffs as $key => $staff) {
                    ?>
                            <li>
                                <img src="<?php echo esc_url($staff['image']); ?>" alt="<?php echo esc_attr($staff['full_name']); ?>" />
                                <span><?php echo esc_html($staff['full_name']); ?></span>
                            </li>
                    <?php

                        }
                    }
                    ?>
                </ul>
                <h3 class="tt-title">
                    <?php
                    echo esc_html($meeting->get_name());
                    ?>
                </h3>
                <!-- meeting description -->
                <p><?php echo esc_html($meeting->get_description()); ?></p>

                <!-- meeting info -->
                <ul class="meeting-info-list">
                    <!-- meeting duration -->
                    <?php if (!empty($meeting->get_duration())) : ?>
                        <li>
                            <svg fill="#3263F8" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                            </svg>
                            <?php echo esc_html($meeting->get_duration()); ?>
                        </li>
                    <?php endif; ?>
                    <!-- meeting price -->


                </ul>
                <button class="ant-btn ant-btn-primary ant-btn-block" data-id="<?php echo esc_attr($id); ?>">
                    <?php echo esc_html__("Book Appointment", "timetics"); ?>
                </button>

                <div class="timetics-booking-modal"></div>
            </div>
        </div>
    <?php
    }
    ?>
</div>