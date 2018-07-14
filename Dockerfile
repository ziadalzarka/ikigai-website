FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install angular dependencies
RUN npm install

# Build angular
RUN npm run build

# Create server directory
WORKDIR /usr/src/app/server

# Bundle server source
COPY ./server .

# Install depenedencies
RUN npm install

# Build server
RUN npm run build

EXPOSE 8090
CMD [ "npm", "start" ]
