FROM node:16.13.1-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/app/

RUN npm install

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=4000

RUN npm run build

EXPOSE 4000

CMD npm run start