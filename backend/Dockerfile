FROM node:20-alpine
WORKDIR /backend
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "start" ]