const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Test name is required"] },
    description: { type: String, required: [true, "Description is required"] },
    price: { type: Number, required: [true, "Price is required"] },
  },
  { timestamps: true }
);

const Test = mongoose.model("Test", testSchema);
module.exports = Test;
