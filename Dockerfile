FROM nginx:1.27-alpine

ARG APP_VERSION=0.0.0
ARG VCS_REF=unknown

LABEL org.opencontainers.image.title="Maintenance Website"
LABEL org.opencontainers.image.description="Static maintenance website"
LABEL org.opencontainers.image.version="${APP_VERSION}"
LABEL org.opencontainers.image.revision="${VCS_REF}"
LABEL org.opencontainers.image.source="https://github.com/Lechner-Systems/MaintenanceWebsite"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js
COPY images /usr/share/nginx/html/images

EXPOSE 80
