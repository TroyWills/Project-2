barOverview.bulkCreate([
  { drink_name: 'Tequila Sour', price: true,description: 'fun tequila' },
//   { drink_name: 'Rum and Coke', price: true },
//   { drink_name: 'bar', price: false }
]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
  return barOverview.findAll();
}).then(response => {
  console.log(response) // ... in order to get the array of user objects
})