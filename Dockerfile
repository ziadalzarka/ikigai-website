FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Create server directory
WORKDIR /usr/src/app/server

RUN ls

# Bundle server source
COPY ./server .

RUN ls

# Install depenedencies
RUN npm install

# Build server
RUN npm run build

WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install angular dependencies
RUN npm install
RUN npm run postinstall

RUN ls

# Build angular
RUN npm run build

RUN ls

EXPOSE 8090
EXPOSE 4090
CMD [ "npm", "start" ]
