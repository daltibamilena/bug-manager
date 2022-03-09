FROM node:17-alpine3.14
# Create app directory
RUN mkdir -p /app
WORKDIR /app

# install nodemon globally
RUN npm install nodemon -g

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . /app

# Exports
EXPOSE 3000

CMD ["npm", "start"]