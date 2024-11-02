# Budowanie aplikacji React
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serwowanie aplikacji oraz API
FROM node:22-alpine
WORKDIR /app
COPY --from=build /app /app
RUN npm install -g serve && npm install express
CMD ["sh", "-c", "serve -s build -l 80 & node server.js"]
EXPOSE 80 5000