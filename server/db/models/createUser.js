const { createUser } = require("./userModel");

const createNewUser = async () => {

  const newUser = {
    username: "user",
    password: "password1",
  };
  const newBusinessOwner = {
    username: "businessowner",
    password: "businessowner1",
    isBusinessOwner: true,
  };
  const newAdmin = {
    username: "admin",
    password: "admin1",
    isAdmin: true,
  };

  const createdUser = await createUser(newUser);
  const createdBusinessOwner = await createUser(newBusinessOwner)
  const createdAdmin = await createUser(newAdmin)

};

module.exports = {
    createNewUser
  };