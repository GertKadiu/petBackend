const express = require('express');
const { createCat, deleteCatById, getCatById, getCats, updateCatById } = require("../controllers/Cats.controller")

const router = express.Router()

router.get("/", getCats)
router.post("/createCat", createCat)
router.put("/updatecats/:id", updateCatById)
router.delete("/deleteCat/:id", deleteCatById)
router.get("/:id", getCatById)

module.exports = router;