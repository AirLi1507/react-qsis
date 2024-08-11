# Use the slim version of Node.js as a base
FROM node:bookworm-slim AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight server image to serve the app
FROM node:bookworm-slim AS production

# Install serve globally
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app/build ./build

# Expose the port on which the app will run
EXPOSE 3000

# Command to serve the app
CMD ["sh", "-c", "cd /app && serve -s build -l 3000"]
