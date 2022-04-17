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
} = require("./models/localBusinessModel.js");

function SaveToMongoDB() {
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
    initialDataPets,
    initialDataRecreation,
    initialDataRestaurant,
  ];

  for (let i = 0; i < collectionName.length; i++) {
    const name = modelingBusinesses(collectionName[i]);
    createLocalBusiness(name, dataArray[i]);
  }
}
SaveToMongoDB();
