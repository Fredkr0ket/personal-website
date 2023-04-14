FROM nginx
COPY . /usr/share/nginx/html

RUN npm run preview