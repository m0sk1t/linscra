FROM node:lts-jessie
ADD ./app /app
WORKDIR /app
RUN npm i
ENTRYPOINT npm run start:livereload
