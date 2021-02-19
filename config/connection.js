// Dependencies
var Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize('baroverview', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;