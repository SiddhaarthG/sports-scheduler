/* eslint-disable no-unused-vars */
const { request, response } = require("express");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.set("view engine", "ejs");

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (request, response) => {
  response.render("index");
});

module.exports = app;
