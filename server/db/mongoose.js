const mongoose = require("mongoose");
require('dotenv').config();



const connectionString = process.env.MONGODB_URI;
  console.log(process.env)
mongoose.connect(connectionString, () => {
  console.log("connected to mongoose");
});

module.exports = mongoose;