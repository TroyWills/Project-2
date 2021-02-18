// dependencies
const express = require('express');
const exphbs  = require('express-handlebars');

// sets our app listening port to 8080 (Heroku deployment)
// const HTTP_PORT = process.env.PORT || 8080;
const db = require("./models/baroverview");

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);






