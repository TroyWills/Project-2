var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

  module.exports = function(sequelize,DataTypes) {
    var Menu = sequelize.define('Menu', {
      drink_name: Sequelize.STRING,
      price: Sequelize.DECIMAL(10,2),
      description: Sequelize.STRING,
      ingredients: Sequelize.STRING,
      category: Sequelize.STRING,
      images: Sequelize.STRING
    });
    
    return Menu
  }