# Step 1: Build the frontend
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install

# Build the app
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

