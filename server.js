/*eslint-disable no-alert, no-console */
"use strict";
// module requires
const express = require('express');
const path = require('path');
// my requires
const routes = require('./routes/');

const app = express();
const PORT = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(routes);

app.get('/', (req, res) => {
    res.send('yup!');
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
