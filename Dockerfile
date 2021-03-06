FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install angular dependencies
RUN npm install
RUN npm run postinstall

# Build angular
RUN npm run build

# Create server directory
WORKDIR /usr/src/app/server

# Install depenedencies
RUN npm install

# Build server
RUN npm run build

EXPOSE 8090
EXPOSE 4090
CMD [ "npm", "start" ]
