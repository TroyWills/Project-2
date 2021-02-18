var db = require("../models")

module.exports = function(app) {
    app.get("/", function(req, res) {
    db.Menu.findAll({})
    .then(function(dbMenu) {
        console.log(dbMenu);
    res.render("home", {dbMenu});
    })
    .catch(function(err){
        console.log(err)
    })
    ;
  });
}


