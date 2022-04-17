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
});

const createLocalBusiness = async (name, data) => {
  const newLocalBusiness = await name.create(data);
  return newLocalBusiness;
}
function modelingBusinesses(collection){
  const businesses = mongoose.model(collection, localBusinessSchema);
  return businesses;
}

const findAllLocalBusiness = async (name) => {
  const findCategory = await name.find();
  return findCategory;
};

const findCafe =async() =>{
  const findCafeData = await cafeBusinesses.find();
  return findCafeData
}

module.exports = {
  createLocalBusiness, modelingBusinesses,
  findAllLocalBusiness,  findCafe,
  
};
