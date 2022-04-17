const mongoose = require("../mongoose");

const { Schema, model } = mongoose;

const localBusinessSchema = new Schema({
  //headCategory: String,
  placeUrl: { type: String, unique: true },
  title: String,
  rating: Number,
  reviewCount: Number,
  category: String,
  attributes: String,
  address: String,
  plusCode: String,
  website: String,
  phoneNumber: String,
  imgUrl: String,
  longitude: String,
  latitude: String,
  quadrant: String,
  licenseTypes: String,
  neighbourhood: String,
  jobStatus: String,
  jobCreated: String,
}); //,{_id: false});
//----to creat model and load data into mongoDB--------
const createLocalBusiness = async (name, data) => {
  const newLocalBusiness = await name.create(data);
  return newLocalBusiness;
};
function modelingBusinesses(collection) {
  const businesses = mongoose.model(collection, localBusinessSchema);
  return businesses;
}
//-------add category to mongoDB---------
const addAllCategory = async (collection, mainCatagory) => {
  const addCategory = await collection.updateMany(
    {},
    { headCategory: mainCatagory }
  );
  return addCategory;
};

//-----------load data from mongoDB-----------
const findAllLocalBusiness = async (collection) => {
  const findCategory = await collection.find();
  return findCategory;
};

module.exports = {
  createLocalBusiness,
  modelingBusinesses,
  findAllLocalBusiness,
  addAllCategory,
};
