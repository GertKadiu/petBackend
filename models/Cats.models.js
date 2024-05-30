const mongoose = require("mongoose");

const CatsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  temperament: {
    type: String,
  },
  description: {
    type: String
  },
  colors: {
    type: String
  },
  origin: {
    type: String,
    require: true
  },
  image: {
    type: String
  }
},{timestamps: true});

const CatsModel = mongoose.model("Cats", CatsSchema);

module.exports = CatsModel;