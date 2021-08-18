const mongoose = require("mongoose");

const namesSchema = new mongoose.Schema({
  name: String,
});

const nameModel = mongoose.model("staffNames", namesSchema);

module.exports = nameModel;
