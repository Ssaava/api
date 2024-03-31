const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, getUser, addUser };
