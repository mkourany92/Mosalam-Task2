FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY src ./src

FROM node:20-alpine
RUN apk add --no-cache curl
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY src ./src
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "src/index.js"]