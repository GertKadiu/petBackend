const BirdsModel = require('../models/Birds.models')

 const getBirds = async (req, res) => {
  try {
    const dogs = await BirdsModel.find();
    res.status(200).json(dogs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get Dogs!" });
  }
};


 const createBirds= async (req, res) => {
  const { 
    name,
    family,
    species,
    habitat,
    place_of_found,
    diet,
    description,
    weight_kg,
    height_cm,
    image
  } = req.body;
  try {
    const newDog = new BirdsModel({
      name,
      species,
      habitat,
      place_of_found,
      diet,
      family,
      description,
      weight_kg,
      height_cm,
      image
    });
    await newDog.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create DOG!" });
  }
};


const getBirdById = async (req, res) => {
  try {
    const { id } = req.params;
    const Dog = await BirdsModel.findById(id);

    if (!Dog) {
      return res.status(404).json({ message: "Dog not found" });
    }

    res.status(200).json(Dog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get Dog" });
  }
};

const updateBirdById = async (req, res) => {
  const { id } = req.params;
  try {
    await BirdsModel.findByIdAndUpdate(
      { _id: id },
      {
        name:req.body.name,
        species:req.body.species,
        habitat:req.body.habitat,
        place_of_found:req.body.place_of_found,
        diet:req.body.diet,
        family:req.body.family,
        description:req.body.description,
        weight_kg:req.body.weight_kg,
        height_cm:req.body.height_cm,
        image:req.body.image
      },
      { new: true }
    )
      .then((updateDog) => res.json(updateDog))
      .catch((error) => res.status(500).json(error));
  } catch (error) {
    console.error("Error reading and encoding image:", error);
    res.status(500).json({ error: "Error reading and encoding image" });
  }
};

const deleteBirdById = (req, res) => {
  const { id } = req.params;
  BirdsModel.findByIdAndDelete(id)
    .then((bird) => {
      if (!bird) {
        return res.status(404).json({ message: "Bird not found" });
      }
      res.json({ message: "Bird deleted successfully" });
    })
    .catch((err) => res.status(500).json({ message: "Failed to delete bird", error: err }));
};

module.exports = {
  getBirds,
  createBirds,
  getBirdById,
  updateBirdById,
  deleteBirdById
};