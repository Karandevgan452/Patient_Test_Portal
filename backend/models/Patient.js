const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Invalid email format.",
      },
    },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    contact: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^[0-9]{10}$/.test(v),
        message: "Contact must be 10 digits.",
      },
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
