// =============================================================
var path = require("path");
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) 
app.use(express.static(path.join(__dirname, '../public')));{

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home2.html"));
  });
  app.get("/pay_tab", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pay_tab.html"));
  });

  app.get("/order", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/order.html"));
  });

};
