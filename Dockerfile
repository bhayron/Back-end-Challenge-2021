FROM node:14.16-alpine3.10

WORKDIR /var/www

#RUN apk add --no-cache -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . .

USER root

EXPOSE 3333

WORKDIR /var/www/

RUN chmod +x entrypoint.sh

CMD ["sh","entrypoint.sh"]
