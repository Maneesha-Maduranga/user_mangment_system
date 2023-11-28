const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected To The Database");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  connectDB,
};
