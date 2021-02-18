var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(sequelize,DataTypes) {
    var Tab = sequelize.define('Tab', {
        currentbill: {
          type: Sequelize.DECIMAL(10,2),
          allowNull:false, 
          defaultValue: 0.00
        }, 
        drinklist: {
          type: Sequelize.STRING (500),
          allowNull: true,
          defaultValue: "no current drinks on your tab."
  
        }
      });
      return Tab;
    }