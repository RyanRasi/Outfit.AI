# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the entire application to the container
COPY . .

# Install dependencies
RUN npm install

# Build the application
##RUN npm run build

##RUN npm install -g serve

# Start prod when the container runs
CMD npm run start
