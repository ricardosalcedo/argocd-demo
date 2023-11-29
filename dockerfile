FROM node:21
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]
