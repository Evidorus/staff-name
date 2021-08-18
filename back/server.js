let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let database = require("./database/db");
const nameModel = require("./models/staffs");

router = express.Router();

//const staffRoute = require("../back/routes/staff.routes");

mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("Database connected sucessfully !");
    },
    (error) => {
      console.log("Database could not be connected : " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
//app.use("/Staffs", staffRoute);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Error Handling
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.get("/staffs", async (req, res) => {
  try {
    const name = await nameModel;
    res.status(200).json(restaurants);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong, try again",
      error: err.toString(),
    });
  }
});

app.get("/staffs/:id", async (req, res) => {
  try {
    const name = await nameModel.findOne({
      _id: req.params.id,
    });
    res.json(name);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: `id ${req.params.id} does not match any name`,
      error: err.toString(),
    });
  }
});

app.post("/", async (req, res) => {
  try {
    await nameModel.create(req.body);
    res.status(200).send("Staff created");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong, try again",
      error: err.toString(),
    });
  }
});
