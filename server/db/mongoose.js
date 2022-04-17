const mongoose = require("mongoose");
require('dotenv').config();


const connectionString = 'mongodb://localhost:27017'
// process.env.MONGODB_URI;

mongoose.connect(connectionString, () => {
  console.log("connected to mongoose");
});

module.exports = mongoose;