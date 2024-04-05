const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((data) => {
      console.log("Database connected successfully");
    })
    .catch((error) =>
      console.log("Error connecting to the database", error.message)
    );
};

module.exports = connectDB;
