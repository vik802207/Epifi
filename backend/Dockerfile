# Use Node base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Expose the port (not mandatory but good practice)
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
