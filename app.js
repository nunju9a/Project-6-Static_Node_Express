//////////////
App.js
/////////////

 
// ADDING VARIABLES TO REQUIRE EXPRESS AND DATA.JSON 
const express = require("express");
const app = express();
const path = require("path");
const data = require("./data.json");
const projects = data.projects;

app.set("view engine", "pug");                         // Setting view engine to pug