const initialDataAuto = require("./data/auto.json");
const initialDataBeauty = require("./data/beauty.json");
const initialDataCafe = require("./data/cafe.json");
const initialDataClothing = require("./data/clothing.json");
const initialDataFastFood = require("./data/fastfood.json");
const initialDataGroceries = require("./data/Groceries.json");
const initialDataPets = require("./data/Pets.json");
const initialDataRecreation = require("./data/Recreation.json");
const initialDataRestaurant = require("./data/Restaurant.json");

const {
  createLocalBusiness,
  modelingBusinesses,
  addAllCategory,
  findAllLocalBusiness,
} = require("./models/localBusinessModel.js");


const collectionName = [
  "auto",
  "coffeeshop",
  "beauty",
  "clothing",
  "fastfood",
  "groceries",
  "pets",
  "recreation",
  "restaurant",
];
const dataArray = [
  initialDataAuto,
  initialDataCafe,
  initialDataBeauty,
  initialDataClothing,
  initialDataFastFood,
  initialDataGroceries,
  initialDataPets,
  initialDataRecreation,
  initialDataRestaurant,
];

const saveToMongoDB = () => {
  for (let i = 0; i < collectionName.length; i++) {
    const name = modelingBusinesses(collectionName[i]);
    createLocalBusiness(name, dataArray[i]);
  }
};
saveToMongoDB();

const addCategoriesToMongoDB = () => {
  collectionName.map((collection) => {
    const name = modelingBusinesses(collection);
    addAllCategory(name, collection);
  });
};
//addCategoriesToMongoDB();
