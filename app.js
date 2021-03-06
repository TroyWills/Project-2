// Our server dependencies 
var express = require('express');
var exphbs = require('express-handlebars');
var router = express.Router();

// Lets our app run on express 
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.static("public"));
app.use(express.static("views/images"));

require("./routes/api-routes")(app);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');   

db.sequelize.sync({force: true}).then(function () {
     app.listen(PORT, function () {
         console.log("App listening on PORT " + PORT);
     });
 });
