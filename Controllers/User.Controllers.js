const User = require("../Models/model");

const CreateUser = async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ err: err.message });
  }
};

const GetUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.status(201).send(users);
  } catch (error) {
    res.status(500).send({ err: err.message });
  }
};

const GetUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    let user = await User.findById(userId);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ err: err.message });
  }
};

const UpdateUser = async (req, res) => {
    try {
      const { userId } = req.params;
      let user = await User.findByIdAndUpdate(userId, req.body, { new: true });
      res.status(201).send(user);
    } catch (error) {
      res.status(500).send({ err: err.message });
    }
};

const DeleteUser = async (req, res) => {
    try {
      const { userId } = req.params;
      let user = await User.findByIdAndDelete(userId);
      res.status(201).send(user);
    } catch (error) {
      res.status(500).send({ err: err.message });
    }
};

module.exports = {
    CreateUser,
    GetUsers,
    GetUserById,
    UpdateUser,
    DeleteUser,
}
