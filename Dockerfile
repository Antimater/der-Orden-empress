FROM node:18

WORKDIR /public

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "public/js/server.js" ]