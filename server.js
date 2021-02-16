// Dependencies
const express = require("express");
const app = express();
const port = 3000; 
// Home page
app.get("/", (req, res) => {
    res.send('Our express server is up and running');
});
var mysql = require("mysql");
var mysql2 = require("mysql2");
// Express app
var express = require("express")

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
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });
