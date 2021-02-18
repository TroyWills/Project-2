// =============================================================
var app = require("../models/baroverview.js");
var router = express.router();
var express = require("express";
)

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home2.html"));
  });
  app.get("/pay_tab", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pay tab.html"));
  });

  app.get("/order", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/order.html"));
  });

};
