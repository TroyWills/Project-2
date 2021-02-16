var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var menu = sequelize.define("menu", {
  drink_name: Sequelize.STRING,
  price: Sequelize.DECIMAL(10,2),
  description: Sequelize.STRING
});
(async () => {
    await sequelize.sync({ force: true });
    sequelize
    .authenticate()
    .then(() => {
      console.log("table was successfully created");
    })
    .catch(err => {
      console.error('error:', err);
    });
  })();

menu.sync();

module.export = menu;