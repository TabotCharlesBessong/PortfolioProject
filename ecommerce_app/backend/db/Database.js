const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((data) => {
      console.log(`mongod connected with server`);
    });
};

module.exports = connectDatabase;
