"use strict";
// module requires
const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
// const bodyParser = require('body-parser');
// my requires
const routes = require('./routes/');

const app = express();
const PORT = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(routes);

//
// app.use(bodyParser.urlencoded({
// 	extended: false
// }));
//
// app.use(bodyParser.json());


// app.get('/', (req, res) => {
//     res.send('yup!');
// })

// compile sass
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
// use static files in public/
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
