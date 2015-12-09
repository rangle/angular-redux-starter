FROM nginx
ENV www /usr/share/nginx/html/
COPY dist/ $www/
