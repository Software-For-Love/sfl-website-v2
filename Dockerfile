FROM node:19-alpine AS build

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 8000

CMD ["npm","start"]
