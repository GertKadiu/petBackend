const mongoose = require("mongoose");


const BirdsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  species: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  family: {
    type: String
  },
  habitat: {
    type: String
  },
  place_of_found: {
    type: String
  },
  diet: {
    type: String
  },
  weight_kg: {
    type: Number
  },
  height_cm: {
    type: Number
  },
  image: {
    type: String,
  }
},{timestamps: true});

const BirdsModel = mongoose.model("Bird", BirdsSchema);

module.exports = BirdsModel;
