const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected to DB");
  } catch (error) {
    console.log("DB connection error:", error);
  }
};

module.exports = connectToDb;