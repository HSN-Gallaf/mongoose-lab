const Recipe = require("./models/Recipe");

const createRecipe = async (newRecipe) => {
  try {
    const oneRecipe = await Recipe.create(newRecipe);
    console.log(oneRecipe);
  } catch (err) {
    console.log("Error Message: ", err);
  }
};

const getAllRecipes = async () => {
  try {
    const allRecipes = await Recipe.find();

    for (let recipe of allRecipes) {
      console.log(
        `${recipe.name} is an ${recipe.difficulty} recipe and takes ${recipe.prepTime} minutes to prepare`,
      );
    }
  } catch (err) {
    console.log("Fail to get recipes", err);
  }
};

const getRecipeById = async (id) => {
  try {
    const oneRecipe = await Recipe.findById(id);
    console.log(oneRecipe);
  } catch (err) {
    console.log("No recipe with this ID exists. ", err);
  }
};

const updateRecipe = async (recipeId, newRecipeData) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipeId,
      newRecipeData,
      { new: true },
    );

    console.log(updatedRecipe);
  } catch (err) {
    console.log("Error Message: ", err);
  }
};

const deleteRecipe = async (recipeId) => {
  try {
    const deleteRecipe = await Recipe.findByIdAndDelete(recipeId);
    console.log("Recipe successfully deleted.");
  } catch (err) {
    console.log("Error Message: ", err);
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
