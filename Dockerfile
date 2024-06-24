FROM node:20-alpine3.19
WORKDIR /
COPY . .
RUN npm install
EXPOSE 5050
CMD [ "npm start" ]