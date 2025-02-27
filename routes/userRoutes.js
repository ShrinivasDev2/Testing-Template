const express = require("express");
const { getUsers, addUser } = require("../controllers/userController");
const Router = express.Router();

Router.get("/users", getUsers);
Router.post("/add-user", addUser);

module.exports = Router;
