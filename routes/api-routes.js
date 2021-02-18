var db = require("../models")

module.exports = function(app) {
    // GET route for getting all of the posts
    app.get("/api/menus", function(req, res) {
      db.menus.findAll({})
        .then(function(dbmenus) {
          res.render(dbmenus);
          console.log(dbmenus);
        });
    });
}