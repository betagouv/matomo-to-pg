FROM node:20-alpine

WORKDIR /app

ADD package.json yarn.lock ./
ADD src ./src
RUN yarn --production && yarn cache clean

ENTRYPOINT [ "node", "src/index.mjs" ]