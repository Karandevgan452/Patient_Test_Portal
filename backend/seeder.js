require("dotenv").config();

const mongoose = require("mongoose");
const Test = require("./models/Test");
const testData = require("./data/testData");
const connectDB = require("./config/db");

const importData = async () => {
  try {
    await connectDB(); // ✅ await here
    await Test.insertMany(testData);
    console.log("✅ Test data seeded!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error.message);
    process.exit(1);
  }
};

importData();
