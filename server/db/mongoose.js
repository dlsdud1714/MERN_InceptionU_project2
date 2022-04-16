const mongoose = require("mongoose");
require('dotenv').config({path: '../.env'})


const connectionString = process.env.MONGODB_URI;
  console.log(process.env)
mongoose.connect(connectionString, () => {
  console.log(`connected to mongoose on ${connectionString}`);
});

module.exports = mongoose;