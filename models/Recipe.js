const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLenght: 2,
      maxLenght: 100,
    },
    instructions: {
      type: [String],
    },
    prepTime: {
      type: Number,
      required: true,
      min: 5,
      max: 500,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      lowercase: true,
    },
  },
  {
    timestamps: true,
  },
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
