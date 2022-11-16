FROM node:alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i

COPY src src
COPY tsconfig.json tsconfig.json

# RUN tsc

CMD npm start


