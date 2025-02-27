const express = require("express");

const Router = express.Router();

Router.get("/", async (req, res) => {
  res.status(200).send("Welcome to the NodeJS server");
});

module.exports = Router;
