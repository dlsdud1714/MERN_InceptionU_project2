const initialData = require("./data/localbusinesses.json");
const {createLocalBusiness, localBusinesses} = require("./models/localBusinessModel.js")

initialData.map((data) => {
    delete data._id;
    delete data.$oid;
});

initialData.map((data)=>createLocalBusiness(data, localBusinesses));
