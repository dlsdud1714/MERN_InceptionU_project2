// const initialDataAuto = require("./data/auto.json");
// const initialDataBeauty = require("./data/beauty.json");
// const initialDataCafe = require("./data/cafe.json");
// const initialDataClothing = require("./data/clothing.json");
// const initialDataFastFood = require("./data/fastfood.json");
const initialData = require("./data/localbusinesses.json");
// petsBusinesses,
// recreationBusinesses,
// restaurantBusinesses} 
const {createLocalBusiness, localBusinesses} = require("./models/localBusinessModel.js")

// initialDataAuto.map((data)=>createLocalBusiness(data, autoBusinesses));
// initialDataBeauty.map((data)=>createLocalBusiness(data, beautyBusinesses));
// initialDataCafe.map((data)=>createLocalBusiness(data, cafeBusinesses));
// initialDataClothing.map((data)=>createLocalBusiness(data, clothingBusinesses));
// initialDataFastFood.map((data)=>createLocalBusiness(data, fastFoodBusinesses));
// initialDataGroceries.map((data)=>createLocalBusiness(data, groceriesBusinesses));
// initialDataPets.map((data)=>createLocalBusiness(data, petsBusinesses));
// initialDataRecreation.map((data)=>createLocalBusiness(data, recreationBusinesses));
// initialDataRestaurant.map((data)=>createLocalBusiness(data, restaurantBusinesses));
initialData.map((data)=>createLocalBusiness(data, localBusinesses));
