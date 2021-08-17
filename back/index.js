const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const nameModel = require("./models/staffs");

mongoose.connect(
  "mongodb://localhost:27017/staffs",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Base de données connectée");
  }
);

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log("Serveur lancé");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
