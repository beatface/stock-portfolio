"use strict";
/* eslint-disable */

// module requires
const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const RedisStore = require('connect-redis')(session);
const bodyParser = require('body-parser');
// my requires
const routes = require('./routes/');

const SESSION_SECRET = process.env.SESSION_SECRET || 'inspectorgadget';

// Connection URL
if (process.env.NODE_ENV === "production") {
	console.log("yes, it's production");
	var mongo_url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}/stockin-up`;
} else {
	var mongo_url = 'mongodb://localhost:27017/stockin-up';
}

const app = express();
const PORT = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// compile sass
app.use(sassMiddleware({
	src: path.join(__dirname, 'public'),
	dest: path.join(__dirname, 'public'),
	indentedSyntax: true,
	sourceMap: true
}));

app.use(bodyParser.urlencoded({
	extended: false
}));

// from express-session (creates session cookie)
app.use(session({
    secret: SESSION_SECRET,
    store: new RedisStore()
}));
// from passport - allows easier authentication for socials, etc
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

mongoose.connect(mongo_url);
const database = mongoose.connection;
database.on('open', (err) => {
    if (err) throw err;
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
});
