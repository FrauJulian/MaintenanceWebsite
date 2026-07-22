FROM nginx:1.27-alpine

ARG VCS_REF=unknown
ARG APP_VERSION=unknown

LABEL org.opencontainers.image.title="MaintenanceWebsite"
LABEL org.opencontainers.image.description="❌ A simple HTML/CSS/JS maintenance website. "
LABEL org.opencontainers.image.licenses="GPL-3.0-only"
LABEL org.opencontainers.image.version="${APP_VERSION}"
LABEL org.opencontainers.image.revision="${VCS_REF}"
LABEL org.opencontainers.image.source="https://git.lechner-systems.at/fraujulian/MaintenanceWebsite"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js
COPY images /usr/share/nginx/html/images

EXPOSE 80
