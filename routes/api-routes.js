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

  let itemsArr = []
  app.post('/', function (req, res) {
    console.log("user data",req.body);
itemsArr.push(req.body)

    db.Tab.create({
        currentbill: req.body.price,
        drinklist: req.body.name
    }).then(function(result){

        res.json(result);
    })
  });

    app.get("/api/drinklist", function(req, res) {
        db.Tab.findAll({})
        .then(function(dbTab) {
        console.log(dbTab);
        res.json(dbTab);
        // res.render("home", {dbTab});
        })
        .catch(function(err){
        console.log(err)
    });
});
}