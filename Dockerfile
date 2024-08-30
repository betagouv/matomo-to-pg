ARG BUILD_VERSION

FROM node:20-alpine

WORKDIR /app

ADD package.json yarn.lock ./
ADD src ./src
RUN yarn --production && yarn cache clean

ENV BUILD_VERSION $BUILD_VERSION

ENTRYPOINT [ "node", "src/index.mjs" ]