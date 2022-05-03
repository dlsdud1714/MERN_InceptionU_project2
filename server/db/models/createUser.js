const { createUser } = require("./userModel");

const createNewUser = async () => {
  const newUser = {
    username: "businessowner",
    password: "password1",
  };
  const createdUser = await createUser(newUser);
  //console.log(`created a new user ${(newUser.username, createdUser._id)}`);
};


module.exports = {
    createNewUser
  };