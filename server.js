// Dependencies
const express = require("express");
const app = express();
const port = 3000;
const HTTP_PORT = process.env.PORT || 8080;
// Home page
app.get("/", (req, res) => {
    res.send('Our express server is up and running');
});
// Viewing Menu
app.get('/Menu', (req, res) => {
    res.send("running at /Customer");
});
// Viewing "local" table (one sitting at)
app.get('/Customer', (req, res) => {
  res.send("running at /Customer");
});
// Viewing your specific tab at the table
// app.get('/Customer: ID', (req, res) => {
//   res.send("running at /Barkeeper");
// });
// This will be the barkeeper login to view tab data at all tables
app.get('/Barkeeper', (req, res) => {
  res.send("running at /Barkeeper");
});
app.listen(port, () => {
     console.log(`Our server is up and running on port: ${port}`);
 });
 app.listen(HTTP_PORT);