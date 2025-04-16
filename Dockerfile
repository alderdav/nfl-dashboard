FROM node:20
WORKDIR /app/nfl-frontend

COPY package.json .
RUN npm install

COPY . .
EXPOSE 8888

CMD ["npm", "run", "dev"]