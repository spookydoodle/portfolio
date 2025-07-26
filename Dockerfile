FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --network-timeout 300000

COPY . .
RUN yarn build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

EXPOSE 80

ENV PORT=80
ENV NODE_ENV=production

CMD ["node", "build"]
