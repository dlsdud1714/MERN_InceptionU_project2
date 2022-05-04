const mongoose = require("../mongoose");

const { Schema, model } = mongoose;

const localBusinessSchema = new Schema({
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
  headCategory: String
});

const localBusinessSchema2 = new Schema({
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
  headCategory: String
});

const localBusinesses = model("businesses", localBusinessSchema);
const localBusinessesTest = model("testbusinesses", localBusinessSchema2);

const createLocalBusiness = async (data, name) => {
  const newLocalBusiness = await name.create(data);
  //console.log('created new local business:', newLocalBusiness)
  return newLocalBusiness;
};

const findAllLocalBusiness = async (name) => {
  const findCategory = await name.find();
  return findCategory;
};


module.exports = {
  createLocalBusiness,
  findAllLocalBusiness,
  localBusinesses,
  localBusinessesTest
};
