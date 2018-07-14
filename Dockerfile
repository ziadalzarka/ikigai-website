FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production
RUN npm install


# Bundle app source
COPY . .

# Build angular
RUN npm build

# Create server directory
WORKDIR /usr/src/app/server

# Install depenedencies

COPY ./server/package*.json ./
RUN npm install

# Bundle server source
COPY ./server .

# Build server
RUN npm build

EXPOSE 8090
CMD [ "npm", "start" ]
