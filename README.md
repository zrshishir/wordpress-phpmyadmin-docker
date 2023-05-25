# wordpress-phpmyadmin-mariadb on macbook m1

- clone this git repo or copy and the paste the `docker-compose.yml` file. Run the following command to run the wordpress environment on docker

    'docker compose up -d'

- I you want to change the password of your databse change it on environment section of `docker-compose-yml` file


    environment:
      MYSQL_USER: root
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: wordpress
      MYSQL_PASSWORD: wordpress
      

- on phpmyadmin environment section


    environment:
      PMA_HOST: db:3306
      MYSQL_ROOT_PASSWORD: password



- also on wordpress environment section


    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress


- If you face `Error establishing a database connection`, delete your `wp-config.php` file and reload.

