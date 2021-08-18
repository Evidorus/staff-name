const mongoose = require("mongoose");

const namesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const nameModel = mongoose.model("staffnames", namesSchema);

module.exports = nameModel;
