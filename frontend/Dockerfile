FROM node:20-alpine
WORKDIR /frontend
COPY . .
RUN npm install
CMD [ "npm", "run", "dev" ]
EXPOSE 3000