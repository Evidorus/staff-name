const mongoose = require("mongoose");
const nameModel = require("./models/staffs");

mongoose.connect(
  "mongodb://localhost:27017/staffs",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Base de données connectée");
  }
);

async function createRestaurants() {
  await nameModel.deleteMany({}).exec();
  const names = nameModel.create([
    {
      name: "Eleftheria",
    },
    {
      name: "Gennadios",
    },
    {
      name: "Lysimachos",
    },
    {
      name: "Hercules",
    },
  ]);
}

console.log(names);

createRestaurants();
