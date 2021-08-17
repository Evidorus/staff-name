const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let namesSchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("staffNames", namesSchema);
