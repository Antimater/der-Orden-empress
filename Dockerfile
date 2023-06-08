FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "public/js/server.js" ]