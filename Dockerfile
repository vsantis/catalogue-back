FROM node:12-alpine AS builder
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY tsconfig.json /app/
COPY src /app/src
RUN npm run build
RUN npm ci --production

FROM alpine:3
RUN apk add nodejs --no-cache
WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
CMD /wait && node app.js
EXPOSE 4000