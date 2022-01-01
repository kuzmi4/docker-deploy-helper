FROM node:alpine
ARG COMPOSE_VERSION=v2.2.2
ENV PORT=3000
ENV PROJECT=default


RUN apk add curl docker-cli
RUN curl -L https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-linux-x86_64 -o /bin/docker-compose && chmod +x /bin/docker-compose

VOLUME /project
WORKDIR /app
COPY . .

RUN yarn
RUN yarn tsc -p .

EXPOSE ${PORT}

CMD node build/index.js
