FROM php:8.2-fpm

# Install common php extension dependencies
RUN apt-get update && apt-get install -y \
    libfreetype-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    zlib1g-dev \
    libzip-dev \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install zip


RUN apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql


# Set the working directory
COPY . /var/www/html
WORKDIR /var/www/html


RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage

# install composer
COPY --from=composer:2.6.5 /usr/bin/composer /usr/local/bin/composer

# copy composer.json to workdir & install dependencies
COPY composer.json ./
RUN composer install

RUN php artisan key:generate

#RUN php artisan route:cache
#RUN php artisan config:cache
#RUN php artisan view:cache

# Set the default command to run php-fpm
CMD ["php", "artisan", "serve", "--host=0.0.0.0"]
