FROM node:slim
WORKDIR /app 
COPY . /app
RUN npm install
EXPOSE 4948
CMD node index.js



