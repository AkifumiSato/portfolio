FROM node:12.16.3

WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force && npm ci
COPY . .
