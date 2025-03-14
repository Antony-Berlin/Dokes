# Use Node.js to build the React app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Clone the latest GitHub repository
RUN apk add --no-cache git && \
    git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO.git /app

# Install dependencies and build the app
RUN npm install --omit=dev && npm run build

# Use Nginx to serve the built app
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
