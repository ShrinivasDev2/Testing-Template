const express = require("express");
const { getUsers, addUser } = require("../controllers/userController");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("Welcome to the server");
});
Router.get("/users", getUsers);
Router.post("/add-user", addUser);

module.exports = Router;
