
var exphbs = require("express-handlebars");
var express = require("express");
//const Handlebars = require('handlebars')

var db = require("./models");


var PORT = process.env.PORT || 8000;
var app = express();


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var db = require("./models");

require("./controllers/burgersController")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
});