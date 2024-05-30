const mongoose = require("mongoose");

const DogsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  breed_group: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  size: {
    type: String
  },
  lifespan: {
    type: String
  },
  origin: {
    type: String
  },
  colors: {
    type: String
  },
  temperament:{
    type: String
  },
  image: {
    type: String
  }
},{timestamps: true});

const DogsModel = mongoose.model("Dogs", DogsSchema);

module.exports =  DogsModel;
