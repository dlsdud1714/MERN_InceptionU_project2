const initialData = require("./data/localbusinesses.json");
const {createLocalBusiness, localBusinesses} = require("./models/localBusinessModel.js")
const { createNewUser } = require("./models/createUser");

initialData.map((data) => {
    delete data._id;
    delete data.$oid;
});

initialData.map((data)=> createLocalBusiness(data, localBusinesses));

createNewUser();