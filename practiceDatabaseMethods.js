const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");
const dotenv = require("dotenv").config();
const connect = require("./db.js");
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("./recipeUtils.js");

connect();

const newRecipe = {
  name: "Baclawa",
  instructions: "bake at 120C",
  prepTime: 100,
  difficulty: "easy",
};

// createRecipe(newRecipe);

// getAllRecipes();

// getRecipeById("6adf36252d89d5a4e5ed7d34");

// updateRecipe("6adf36252d89d5a4e5ed7d34", {
//   prepTime: 200,
//   difficulty: "medium",
// });

// deleteRecipe("6adf39b8003324f8017235ba");
