# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your Node.js app is running on (if applicable)
# EXPOSE 3000

# Specify the command to run your application
CMD [ "node", "index.js" ]
