const mongoose = require("mongoose");
const nameModel = require("./staffs");

mongoose.connect(
  "mongodb://localhost:27017/staffs",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Base de données connectée");
  }
);

async function createNames() {
  await nameModel.deleteMany({}).exec();
  const tables = nameModel.create([
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

createNames();
