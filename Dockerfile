# Stage 1: Build the static application
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package.json and lockfile
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the Astro project
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built site from the builder stage over to the nginx html dir
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
