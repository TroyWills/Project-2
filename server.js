// Dependencies
var mysql = require("mysql");
var mysql2 = require("mysql2");

// Express app
var express = require("express")

// Set the port of our aplication 
var port = process.env.PORT || 8080;

// create connection to the database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "baroverview"
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });