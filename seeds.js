const Menu = require("./models")
var Sequelize = require("sequelize");
var sequelize = require("./config/connection.js");

module.exports = (async () => {
    await sequelize.sync({ force: false }); 
    // changed force true => false which then didnt drop our model
    sequelize
    .authenticate()
    .then(() => {
      console.log("table was successfully created");
      Menu.bulkCreate([
        { drink_name: 'Tequila Sour', 
          price: 13.00, 
          description: 'A tangy and refreshing must have after a long day!', 
          ingredients: 'Your favorite tequila, lime juice,lemon juice, agave syrup, angostura bitters, and egg white.', 
          category: 'cocktail',
          images: 'https://www.acouplecooks.com/wp-content/uploads/2020/04/Tequila-Sour-012.jpg'
        },
        { 
          drink_name: 'Rum and Coke', 
          price: 10.00, 
          description: 'Kick back with our simple yet satisfying rum and coke.', 
          ingredients: 'Rum, Coca-cola, and a lime wedge.', 
          category: 'cocktail',
          images: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190904-rum-and-coke-0345-landscape-pf-1568846706.jpg'
        },
        { 
          drink_name: 'S.H.O.T.S', 
          price: 8.00, 
          description: 'Take a load off with some shots.', 
          ingredients: 'Your choice of any of our delectable liquors.', 
          category: 'hard-liquor',
          images: 'https://i.pinimg.com/originals/95/16/84/951684152a3dea017f196822e1b14a4f.jpg'
        },
        { 
          drink_name: 'Long Island Iced Tea', 
          price: 11.00, 
          description: 'A cocktail that will never go out of style! The concoction of rum, vodka, gin, tequila, and triple sec is irrestiable. ' , 
          ingredients: 'Your choice of any of our delectable liquors.', 
          category: 'cocktail',
          images: 'https://www.thespruceeats.com/thmb/OfagHnZQpgIs4Y0ww-h2SsL_s8g=/889x667/smart/filters:no_upscale()/LIT-5a8f365efa6bcc00372a7634.jpg'
        },
        { 
          drink_name: 'Craft Beer', 
          price: 7.00, 
          description: 'Try any of our delicious craft beers as well as import beers as well.' , 
          ingredients: 'Beer with a choice of a garnish if you would like.', 
          category: 'beer',
          images: 'https://beveragedynamics.com/wp-content/uploads/2018/09/iStock-923450642.jpg'
        },
        { 
          drink_name: 'Dry Martini', 
          price: 14.00, 
          description: 'Our famous dry martini that has stood the test of time.' , 
          ingredients: 'Gin, dry vermouth, orange bitters, with a lemon twist garnish.', 
          category: 'martini',
          images: 'https://www.liquor.com/thmb/Tg83gGIz-cS8nO-aAHa2N6R4eFQ=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/dry-martini-720x720-primary-a6de08f8cd584ad88520287922578bcb.jpg'
        },
        { 
          drink_name: 'Mojito', 
          price: 12.00, 
          description: 'A fresh taste of summer, year round!' , 
          ingredients: 'White rum, club soda, mint leaves, lime, and sugar.', 
          category: 'cocktail',
          images: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/07/mojito-500x500.jpg'
        },
        { 
          drink_name: 'Mai Tai', 
          price: 12.50, 
          description: 'This Polynesian-style cocktail has been the symbol of Tahitian culture ever since the drink was created.' , 
          ingredients: 'Light rum, gold rum, Orange Curacao liqueur, almond syrup, lime juice, and dark rum.', 
          category: 'cocktail',
          images: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/refreshing-rum-mai-tai-cocktail-royalty-free-image-1129485781-1567157013.jpg?crop=0.664xw:0.498xh;0.154xw,0.361xh&resize=1200:*'
        },
        { 
          drink_name: 'Wine', 
          price: 15.00, 
          description: 'Choose from our many house wines.' , 
          ingredients: 'Wine.', 
          category: 'wine' ,
          images: 'https://cdn.shopify.com/s/files/1/0156/2938/5792/products/product-image-1287441452.jpg?v=1583314092'
        },
        {
          drink_name: 'PBR ', 
          price: 4.00, 
          description: 'As requested from the famous Matty J, the famous (or infamous) PBR!' , 
          ingredients: 'A solution to a bad day in a can.', 
          category: 'classic drink',
          images: 'https://media3.s-nbcnews.com/j/newscms/2018_46/2643221/181112-pbr-al-1054_2e4a5b33a86c258df79f0a21e527dd91.nbcnews-fp-1200-630.jpg'
        },
        ])
        .then(() => { 
        return Menu.findAll();
      })
    })
    .catch(err => {
      console.error('error:', err);
    });
  })();
Menu.sync();

