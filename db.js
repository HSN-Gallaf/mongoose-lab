const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.DB_CONNECTION}`);
    console.log("Connected to Database");
  } catch (err) {
    console.log("Failed to create recipe. ", err);
  }
};

module.exports = connect;
