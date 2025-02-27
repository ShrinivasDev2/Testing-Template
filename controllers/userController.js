const User = require("../models/userModel");

const addUser = async (req, res) => {
  try {
    const data = req.body;
    const newData = new User(data);
    const savedData = await newData.save();
    res.status(201).json({ message: "Saved !!", savedData });
  } catch (e) {
    res.status(500).json({ error: "Something went wrong!", e });
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({ message: "Data ===> ", data });
  } catch (e) {
    res.status(500).json({ error: "Something went wrong!", e });
  }
};

module.exports = { addUser, getUsers };
