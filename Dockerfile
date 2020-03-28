FROM node:12.14.1

WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force && npm ci
COPY . .

EXPOSE 8000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0" ]
