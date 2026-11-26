FROM node:22-alpine

ARG BUILD_VERSION

WORKDIR /app

ADD package.json yarn.lock ./
ADD src ./src
RUN yarn --production && yarn cache clean

ENV BUILD_VERSION=$BUILD_VERSION

ENTRYPOINT [ "node", "src/index.mjs" ]
