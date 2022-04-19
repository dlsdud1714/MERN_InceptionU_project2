const mongoose = require("mongoose");
require('dotenv').config({path: '../.env'})


const connectionString = "mongodb+srv://dlsdud1714:in2005125mb@localbusiness.ponup.mongodb.net/localBusiness?retryWrites=true&w=majority"
//process.env.MONGODB_URI;
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(process.env)
=======
//console.log(process.env)
>>>>>>> parent of f89e7d4 (Co-authored-by: InyoungPark <dlsdud1714@users.noreply.github.com>)
=======
//console.log(process.env)
>>>>>>> parent of f89e7d4 (Co-authored-by: InyoungPark <dlsdud1714@users.noreply.github.com>)
mongoose.connect(connectionString, () => {
  console.log(`connected to mongoose on ${connectionString}`);
});

module.exports = mongoose;