let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let nameModel = require("../models/staffs");

router.route("/create").post((req, res, next) => {
  nameModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("user created" + data);
      res.json("user created" + data);
    }
  });
});

router.route("/").get((req, res) => {
  nameModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route("/edit/:id").get((req, res) => {
  nameModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
