# Use an official Node.js runtime as a base image
FROM node:14-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the application
RUN npm run build

# Use a smaller image for the production environment
FROM nginx:alpine

# Copy the built app from the builder stage to the production image
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the port that Nginx will run on
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
