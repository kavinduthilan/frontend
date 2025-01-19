#use official node runtime as a parent image
FROM node:20-alpine

#set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

#install dependencies
RUN npm install

#Copy the remaining application files to the working directory
COPY . .

#Build the app
RUN npm run build

#Expose port 3000
EXPOSE 3000

#Start the app
CMD ["npm", "start"]