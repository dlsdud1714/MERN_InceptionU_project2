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
    businessId: "62605ab85a90a6b8ecb0ed2b" // compucare
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