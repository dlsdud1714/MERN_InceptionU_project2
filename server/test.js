const initialData = require("./db/data/localbusinesses.json");


dataArray = [
  {
    name: "dy",
    id: "123",
    age: "qwerty",
  },
  {
    name: "dyty",
    id: "1456",
    age: "qasd",
  },
];

initialData.map((data) => {
    delete data._id;
    delete data.$oid;
});





