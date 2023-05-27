<?php
/**
 * Staff onboard page template
 *
 * @package Timetics
 */

$user         = wp_get_current_user();
$integrations = timetics_get_staff_integrations( $user->ID );
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title><?php esc_html_e( 'Staff onboard', 'timetics' ); ?></title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
        />
    </head>
    <style>
        body {
            box-sizing: border-box;
            background-color: #f4f5f7;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        h2,
        h3,
        h4 {
            margin: 0;
            font-weight: 500;
        }
        p {
            margin: 0;
            color: #00000073;
        }

        header {
            margin-bottom: 30px;
        }

        .onboard-wraper {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .template-container {
            max-width: 690px;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 30px 40px;
            margin: 0 auto;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
        .single-list {
            border-bottom: 1px solid #f0f0f0;
            margin-bottom: 20px;
        }
        .single-list:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .single-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }

        .integration-logo {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #edf4ff;
        }
        .connect-btn {
            background-color: #1890ff;
            border: none;
            padding: 10px 18px;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            line-height: 1;
            text-decoration: none;
            font-size: 14px;
        }
        .connect-btn:hover {
            background: #40a9ff;
        }
        .skip-wrapper{
            text-align: right;
        }
        @media screen and (max-width: 767px) {
            .template-container {
                padding: 15px 25px;
            }
            .single-item {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
    <body>
        <div class="onboard-wraper">
            <div class="template-container">
                <header><h2><?php esc_html_e( 'Integrations', 'timetics' ); ?></h2></header>
                <main class="main-wrapper">
                    <ul>
                        <?php foreach( $integrations as $integration ): ?>
                        <li class="single-list">
                            <div class="single-item">
                                <div class="integration-logo">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.1816 10.4049L12.9362 12.4103L15.2955 13.9181L15.7068 10.4172L15.2955 6.99451L12.8909 8.31916L11.1816 10.4049Z"
                                            fill="#00832D"
                                        />
                                        <path
                                            d="M1 13.5931V16.5756C1 17.2575 1.55228 17.8097 2.23414 17.8097H5.21666L5.83373 15.5554L5.21666 13.5931L3.17004 12.976L1 13.5931Z"
                                            fill="#0066DA"
                                        />
                                        <path
                                            d="M5.21666 3L1 7.21666L3.17004 7.83373L5.21666 7.21666L5.82345 5.28111L5.21666 3Z"
                                            fill="#E94235"
                                        />
                                        <path
                                            d="M5.21666 7.21666H1V13.5931H5.21666V7.21666Z"
                                            fill="#2684FC"
                                        />
                                        <path
                                            d="M17.9902 4.78541L15.2956 6.99453V13.9181L18.0025 16.1375C18.4077 16.4542 19.0001 16.1652 19.0001 15.65V5.26261C19.0001 4.74118 18.3944 4.45527 17.9902 4.78541ZM11.1818 10.4049V13.5931H5.2168V17.8097H14.0615C14.7434 17.8097 15.2956 17.2575 15.2956 16.5756V13.9181L11.1818 10.4049Z"
                                            fill="#00AC47"
                                        />
                                        <path
                                            d="M14.0615 3H5.2168V7.21666H11.1818V10.4049L15.2956 6.99657V4.23414C15.2956 3.55228 14.7434 3 14.0615 3Z"
                                            fill="#FFBA00"
                                        />
                                    </svg>
                                </div>
                                <div class="content">
                                    <h3><?php echo esc_html( $integration['name'] ); ?></h3>
                                    <p>
                                        <?php echo esc_html( $integration['description'] ); ?>
                                    </p>
                                </div>
                                <a class="connect-btn" href="<?php echo esc_url( $integration['auth_url'] ); ?>"><?php esc_html_e( 'Connect', 'timetics' ); ?></a>
                            </div>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                    <div class="skip-wrapper">
                        <a  class="skip-button" href="<?php echo esc_url( admin_url('admin.php?page=timetics#/my-profile') ); ?>"><?php esc_html_e( 'Skip', 'timetics' ); ?></a>
                    </div>
                </main>
            </div>
        </div>
    </body>
</html>
