FROM nginx:stable
MAINTAINER Ana Shofiya  "shofiya@alterra.id"

RUN mkdir -p /coba/www/FE-E-Commerce
RUN mkdir -p /coba/log

COPY default.conf /etc/nginx/conf.d/

ADD build/. /coba/www/FE-E-Commerce/

WORKDIR /coba/www/FE-E-Commerce
