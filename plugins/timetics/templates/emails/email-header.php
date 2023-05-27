<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title><?php echo esc_html( get_bloginfo( 'name' ) ); ?></title>
    </head>
    <style>
        * {
            box-sizing: border-box;
        }
        body {
            background-color: #f4f5f7;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
        }
        p {
            margin-bottom: 1rem;
        }
        a {
            display: inline-block;
            text-align: center;
        }

        .template-container {
            max-width: 690px;
            background-color: #ffffff;
            border-top: 5px solid #509b8f;
            border-radius: 10px;
            padding: 30px 50px;
            margin: 0 auto;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
        .email-wrapper {
            margin-bottom: 30px;
        }
        .company-info-are {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        .verify-button,
        a {
            background-color: #491df5;
            border: none;
            padding: 15px;
            width: 100%;
            color: #fff;
            font-size: 18px;
            border-radius: 50px;
        }
    </style>
    <body>
        <div class="template-container">
            <header>
                <div class="company-info-are">
                    <!-- <div class="company-logo"><img src="" alt="Image" /></div> -->
                    <div class="company-name"><h2><?php echo esc_html( get_bloginfo( 'name' ) ); ?></h2></div>
                </div>
            </header>
