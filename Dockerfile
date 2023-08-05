# Use an official PHP image as the base image with PHP 7.4
FROM php:7.4-apache

# Update package repositories
RUN apt-get update

# Install required packages
RUN apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libxml2-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip

# Configure GD extension
RUN docker-php-ext-configure gd --with-freetype --with-jpeg

# Install PHP extensions
RUN docker-php-ext-install -j$(nproc) gd mysqli pdo pdo_mysql zip opcache xmlrpc pgsql pdo_pgsql

# Set the working directory
WORKDIR /var/www/html

# Copy the Moodle codebase into the container
COPY moodle/ .

# Set permissions for Moodle files
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Expose port 80 for Apache
EXPOSE 80

# Start Apache server
CMD ["apache2-foreground"]
