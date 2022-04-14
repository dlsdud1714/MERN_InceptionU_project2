const initialDataAuto = require("./data/auto.json");
const initialDataBeauty = require("./data/beauty.json");
const initialDataCafe = require("./data/cafe.json");
const initialDataClothing = require("./data/clothing.json");
const initialDataFastFood = require("./data/fastfood.json");
const initialDataGroceries = require("./data/Groceries.json");
const initialDataPets = require("./data/Pets.json");
const initialDataRecreation = require("./data/Recreation.json");
const initialDataRestaurant = require("./data/Restaurant.json");


const {createLocalBusiness, 
    autoBusinesses, 
    cafeBusinesses, 
    beautyBusinesses, 
    clothingBusinesses, 
    fastFoodBusinesses,
    groceriesBusinesses,
    petsBusinesses,
    recreationBusinesses,
    restaurantBusinesses} = require("./models/localBusinessModel.js");

initialDataAuto.map((data)=>createLocalBusiness(data, autoBusinesses));
initialDataBeauty.map((data)=>createLocalBusiness(data, beautyBusinesses));
initialDataCafe.map((data)=>createLocalBusiness(data, cafeBusinesses));
initialDataClothing.map((data)=>createLocalBusiness(data, clothingBusinesses));
initialDataFastFood.map((data)=>createLocalBusiness(data, fastFoodBusinesses));
initialDataGroceries.map((data)=>createLocalBusiness(data, groceriesBusinesses));
initialDataPets.map((data)=>createLocalBusiness(data, petsBusinesses));
initialDataRecreation.map((data)=>createLocalBusiness(data, recreationBusinesses));
initialDataRestaurant.map((data)=>createLocalBusiness(data, restaurantBusinesses));