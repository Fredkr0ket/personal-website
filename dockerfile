FROM nginx
COPY . /usr/share/nginx/html

RUN npm run build
RUN npm run preview