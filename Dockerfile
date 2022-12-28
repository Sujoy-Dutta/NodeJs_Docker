FROM node:alpine

WORKDIR /user/mynodeapp 

COPY ./ ./

RUN npm install

CMD ["npm","start"] 

