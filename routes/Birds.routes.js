const express = require('express');
const { createBirds, deleteBirdById, getBirdById, getBirds, updateBirdById } =  require("../controllers/Birds.controller.js");



const router = express.Router()

router.get("/", getBirds)
router.post("/createBird", createBirds)
router.put("/updatebirds/:id", updateBirdById)
router.delete("/deleteBird/:id", deleteBirdById)
router.get("/:id", getBirdById)

module.exports = router;