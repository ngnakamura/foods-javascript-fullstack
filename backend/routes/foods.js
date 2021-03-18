const { Router } = require("express");
const router = Router();

const Food = require("../models/Food");

// Metodo GET
router.get("/", async (req, res) => {
    const foods = await Food.find(); // Consulto en la BD todas las comidas
    res.json(foods);
});

// Metodo POST
router.post("/", async (req, res) => {
    const { food_name } = req.body; // dentro de las llaves debo poner el nombre del campo que tengo definido en mi Schema
    const newFood = new Food({food_name});
    await newFood.save();
    res.json({message: "Food Saved"})
});

// Metodo DELETE
router.delete("/:id", async (req, res) => {
    await Food.findByIdAndDelete(req.params.id); // Hard delete
    res.json({message: "Food Deleted"})
});

module.exports = router;