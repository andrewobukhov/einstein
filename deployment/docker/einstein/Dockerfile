FROM nginx:1.13.3
USER root
RUN rm /etc/nginx/conf.d/default.conf && mkdir -p /home
RUN chown -R nginx /usr/share/nginx/html
COPY dist /usr/share/nginx/html
COPY conf/nginx.conf /etc/nginx/nginx.conf
