const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { model, Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model("User", userSchema);

const createUser = async (user) => {
  // hash password with bcrypt
  const hashedPassword = bcrypt.hash(user.password, 10);
  const newUser = await User.create({
    username: user.username,
    password: hashedPassword,
  });
  return newUser;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  console.log(`User is ${user}`);
  return user;
};


const updateUser = async (id, data) => {
  const updatedUser = await User.findByIdAndUpdate(id, upDateData, {
    new: true,
  });
  return updatedUser;
};


module.exports = {
  createUser,
  getUserById,
  updateUser
};
