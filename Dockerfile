FROM node:16

WORKDIR /usr/src/app

COPY ./playground/package*.json ./

RUN npm install --target_arch=x64 --target_platform=linux --target_libc=glibc

RUN npm install

RUN npm rebuild argon2

RUN npm install -g prisma

COPY ./playground .

COPY ./prisma ./prisma/

RUN npx prisma generate

EXPOSE 3007

CMD npx prisma migrate dev --name init && npm run start:dev