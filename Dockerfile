FROM node:20-alpine as builder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy application code
COPY . .

RUN npm run build

FROM node:20-alpine as runner

RUN npm install -g serve

WORKDIR /app

# Copy built files
COPY --from=builder /app/dist ./dist

EXPOSE 5137

# Serve the application
CMD ["serve", "-s", "dist"]
