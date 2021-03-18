const { Schema, model } = require("mongoose");

const FoodSchema = new Schema({
    food_name: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model("Food", FoodSchema);