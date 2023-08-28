FROM node

WORKDIR /usr/src/app
VOLUME /usr/src/app

COPY . .

RUN npm install -g bower
#RUN bower install --allow-root

RUN npm install -g http-server
RUN npm install webpack webpack-cli --save-dev
RUN npm install mini-css-extract-plugin terser-webpack-plugin --save-dev
RUN npm install css-loader style-loader --save-dev
RUN npm install -g sass

EXPOSE 8080
CMD ["http-server"]