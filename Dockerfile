# Use lightweight Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy dependency files first (for caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy application source
COPY . .

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
