const { Collection } = require("../mongoose");
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

const autoBusinesses = mongoose.model("auto", localBusinessSchema);
const cafeBusinesses = mongoose.model("coffeshop", localBusinessSchema);
const beautyBusinesses = mongoose.model("beauty", localBusinessSchema);
const clothingBusinesses = mongoose.model("clothing", localBusinessSchema);
const fastFoodBusinesses = mongoose.model("fastfood", localBusinessSchema);
const groceriesBusinesses = mongoose.model("groceries", localBusinessSchema);
const petsBusinesses = mongoose.model("pets", localBusinessSchema);
const recreationBusinesses = mongoose.model("recreation", localBusinessSchema);
const restaurantBusinesses = mongoose.model("restaurant", localBusinessSchema);

const createLocalBusiness = async (data, name) => {
  const newLocalBusiness = await name.create(data);
  // console.log('created new local business:', newLocalBusiness)
  return newLocalBusiness;
};

const findAllLocalBusiness = async (name) => {
  const findCategory = await name.find();
  return findCategory;
};

const findCafe =async() =>{
  const findCafeData = await cafeBusinesses.find();
  return findCafeData
}

const categoryArray = [
  autoBusinesses,
  cafeBusinesses,
  beautyBusinesses,
  clothingBusinesses,
  fastFoodBusinesses,
  restaurantBusinesses,
  groceriesBusinesses,
  petsBusinesses,
  recreationBusinesses,
];

const array = [1, 2, 3, 4, 5]

// const data = categoryArray.map((category) => {
//   findAllLocalBusiness(category)//.then((data) => console.log("Data", data))
// });
const result = []
const data = array.map((index) => {
  const value= index + 1;
  result.push(value);
});
console.log("Example", result)

module.exports = {
  createLocalBusiness,
  findAllLocalBusiness, data, findCafe,
  autoBusinesses,
  cafeBusinesses,
  beautyBusinesses,
  clothingBusinesses,
  fastFoodBusinesses,
  groceriesBusinesses,
  petsBusinesses,
  recreationBusinesses,
  restaurantBusinesses,
};
