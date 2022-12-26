
FROM node

WORKDIR /app

COPY package.json .

RUN apt-get update -y

RUN apt install default-jdk -y

RUN apt install node-gyp -y

RUN apt-get install libstdc++6 -y

RUN npm install

COPY . .

EXPOSE 3300

CMD [ "npm", "start" ]

#docker run -it --rm -d -v "C:\\Users\\tommal\\Documents\\web-as400\\as400_db:/app" -v /app/node_modules -p 330:3300 backend
# sudo docker run --name backend -it --rm -v "/home/tommal/Desktop/web-as400/as400_db:/app" -v /app/node_modules -p 3300:3300 backend


# sudo docker build -t backend .
#docker run -it -d --restart always -p 3300:3300 --name c-as tommal/as
