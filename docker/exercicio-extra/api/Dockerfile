# Base
FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./


# Development
FROM base AS dev

RUN npm ci

COPY src ./src

EXPOSE 3000

CMD ["npm", "run", "dev"]


# Production
FROM base AS prod

ENV NODE_ENV=production

RUN npm ci --omit=dev

COPY src ./src

USER node

EXPOSE 3000

CMD ["npm", "start"]