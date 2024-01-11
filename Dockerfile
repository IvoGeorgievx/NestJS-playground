FROM node:16

WORKDIR /usr/src/app

COPY ./playground/package*.json ./

RUN npm install

COPY ./prisma ./prisma/

COPY ./playground .

COPY .env .

RUN npx prisma generate
RUN npm install -g prisma

EXPOSE 3007

CMD rm -rf node_modules && npm install && npx prisma migrate deploy && npm run start:dev