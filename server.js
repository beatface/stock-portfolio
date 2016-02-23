"use strict";
/* eslint-disable */

// module requires
const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// my requires
const routes = require('./routes/');

// Connection URL
if (process.env.NODE_ENV === "production") {
	console.log("yes, it's production");
	var mongo_url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}/node-webserver-emma`;
	console.log(mongo_url);
} else {
	var mongo_url = 'mongodb://localhost:27017/';
}

const app = express();
const PORT = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use(bodyParser.urlencoded({
	extended: false
}));

// app.use(bodyParser.json());

// compile sass
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));

mongoose.connect(mongo_url);
const database = mongoose.connection;
database.on('open', (err) => {
    if (err) throw err;
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
});
