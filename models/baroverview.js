var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var menu = sequelize.define('menu', {
  drink_name: Sequelize.STRING,
  price: Sequelize.DECIMAL(10,2),
  description: Sequelize.STRING,
  ingredients: Sequelize.STRING,
  category: Sequelize.STRING
});
(async () => {
    await sequelize.sync({ force: false }); 
    // changed force true => false which then didnt drop our model
    sequelize
    .authenticate()
    .then(() => {
      console.log("table was successfully created");
      menu.bulkCreate([
        { drink_name: 'Tequila Sour', 
          price: 13.00, 
          description: 'A tangy and refreshing must have after a long day!', 
          ingredients: 'Your favorite tequila, lime juice,lemon juice, agave syrup, angostura bitters, and egg white.', 
          category: 'cocktail'
        },
        { 
          drink_name: 'Rum and Coke', 
          price: 10.00, 
          description: 'Kick back with our simple yet satisfying rum and coke.', 
          ingredients: 'Rum, Coca-cola, and a lime wedge.', 
          category: 'cocktail'
        },
        { 
          drink_name: 'S.H.O.T.S', 
          price: 8.00, 
          description: 'Take a load off with some shots.', 
          ingredients: 'Your choice of any of our delectable liquors.', 
          category: 'hard-liquor'
        },
        { 
          drink_name: 'Long Island Iced Tea', 
          price: 11.00, 
          description: 'A cocktail that will never go out of style! The concoction of rum, vodka, gin, tequila, and triple sec is irrestiable. ' , 
          ingredients: 'Your choice of any of our delectable liquors.', 
          category: 'cocktail'
        },
        { 
          drink_name: 'Craft Beer', 
          price: 7.00, 
          description: 'Try any of our delicious craft beers as well as import beers as well.' , 
          ingredients: 'Beer with a choice of a garnish if you would like.', 
          category: 'beer'
        },
        { 
          drink_name: 'Dry Martini', 
          price: 14.00, 
          description: 'Our famous dry martini that has stood the test of time.' , 
          ingredients: 'Gin, dry vermouth, orange bitters, with a lemon twist garnish.', 
          category: 'martini'
        },
        { 
          drink_name: 'Mojito', 
          price: 12.00, 
          description: 'A fresh taste of summer, year round!' , 
          ingredients: 'White rum, club soda, mint leaves, lime, and sugar.', 
          category: 'cocktail' 
        },
        { 
          drink_name: 'Mai Tai', 
          price: 12.50, 
          description: 'This Polynesian-style cocktail has been the symbol of Tahitian culture ever since the drink was created.' , 
          ingredients: 'Light rum, gold rum, Orange Curacao liqueur, almond syrup, lime juice, and dark rum.', 
          category: 'cocktail' 
        },
        { 
          drink_name: 'Wine', 
          price: 15.00, 
          description: 'Pick from our many house wines.' , 
          ingredients: 'Wine.', 
          category: 'wine' 
        },
        { 
          drink_name: 'PBR ', 
          price: 4.00, 
          description: 'As requested from the famous Matty J, the famous (or infamous) PBR!' , 
          ingredients: 'Light rum, gold rum, Orange Curacao liqueur, almond syrup, lime juice, and dark rum.', 
          category: 'cocktail' 
        },
        ])
        .then(() => { // Notice: There are no arguments here, as of right now you'll have to...
        return menu.findAll();
      })
    })
    .catch(err => {
      console.error('error:', err);
    });
  })();
menu.sync();


  // .then(users => {
  //   console.log(users) // ... in order to get the array of user objects
  // })
  module.export = menu;