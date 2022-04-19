const mongoose = require("mongoose");
require('dotenv').config({path: '../.env'})


const connectionString = 'mongodb+srv://dlsdud1714:in2005125mb@localbusiness.ponup.mongodb.net/localBusiness?retryWrites=true&w=majority'
//process.env.MONGODB_URI;
//console.log(process.env)
mongoose.connect(connectionString, () => {
  console.log(`connected to mongoose on ${connectionString}`);
});

module.exports = mongoose;