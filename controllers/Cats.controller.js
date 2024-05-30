const CatsModel = require('../models/Cats.models')

 const getCats = async (req, res) => {
  try {
    const dogs = await CatsModel.find();
    res.status(200).json(dogs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get Cats!" });
  }
};

 const createCat = async (req, res) => {
  const { name, origin, temperament, colors, description, image } = req.body;
  try {
    const newDog = new CatsModel({
      name,
      origin,
      temperament,
      colors,
      description,
      image,
    });
    await newDog.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create Cat!" });
  }
};

const getCatById = async (req, res) => {
  try {
    const { id } = req.params;
    const Dog = await CatsModel.findById(id);

    if (!Dog) {
      return res.status(404).json({ message: "Cat not found" });
    }

    res.status(200).json(Dog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get Cat" });
  }
};

 const updateCatById = async (req, res) => {
  const { id } = req.params;
  try {
    await CatsModel.findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        origin: req.body.origin,
        temperament: req.body.temperament,
        colors: req.body.colors,
        description: req.body.description,
        image: req.body.image,
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

 const deleteCatById = (req, res) => {
  const { id } = req.params;
  CatsModel.findByIdAndDelete(id)
    .then((cat) => {
      if (!cat) {
        return res.status(404).json({ message: "Cat not found" });
      }
      res.json({ message: "Cat deleted successfully" });
    })
    .catch((err) =>
      res.status(500).json({ message: "Failed to delete Cat", error: err })
    );
};



module.exports = {
  getCats,
  createCat,
  getCatById,
  updateCatById,
  deleteCatById
};