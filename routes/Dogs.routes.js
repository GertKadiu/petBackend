const express = require('express');
const { createDog, deleteDogById, getDogById, getDogs, updateDogsById } = require("../controllers/Dogs.controllers")



const router = express.Router()

router.get("/", getDogs)
router.post("/createDog", createDog)
router.put("/updatedogs/:id", updateDogsById)
router.delete("/deleteDog/:id", deleteDogById)
router.get("/:id", getDogById)

module.exports = router;