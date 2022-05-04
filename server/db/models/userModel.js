const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { model, Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isBusinessOwner: {type: Boolean, default: false},
  isAdmin: {type: Boolean, default: false},
  businessId: {type: String, default: ""}
});

const User = model("User", userSchema);

const createUser = async (user) => {
  // hash password with bcrypt
  const hashedPassword = bcrypt.hashSync(user.password);

  const newUser = await User.create({
   ...user,
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

const getUserByUsername = async (username) => {
    const user = await User.findOne({username: username});
    return user
}

const verifyPassword = async (password, hashedPassword) => {
    const passwordsMatch = await bcrypt.compare(password, hashedPassword)
    return passwordsMatch
}
module.exports = {
  createUser,
  getUserById,
  updateUser,
  getUserByUsername, 
  verifyPassword,
};
