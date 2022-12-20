FROM node:18

EXPOSE 8080

WORKDIR /app

CMD yarn \
    && yarn db:migrate-prod \
    && yarn db:seed \
    && yarn start:all
