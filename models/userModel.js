const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  language: {
    type: String,
  },
  id: {
    type: String,
  },
  bio: {
    type: String,
  },
  version: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
