const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose = require('./config/mongoose');

const index = require('./routes/index');

app.use('/', index);

app.listen(3000, () => {
    console.log('App running on port 3000');
});
