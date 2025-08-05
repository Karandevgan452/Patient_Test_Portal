const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Patient = require("../models/Patient");

// jwt-token-generator
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// register-patient function
const registerPatient = async (req, res) => {
  try {
    const { name, email, password, age, contact } = req.body;
    if (!name || !email || !password || !age || !contact) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingPatient = await Patient.findOne({ email });
    if (existingPatient)
      return res
        .status(400)
        .json({ message: "Patient with this email already exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const patient = await Patient.create({
      name,
      email,
      password: hashedPassword,
      age,
      contact,
    });

    res.status(201).json({
      id: patient._id,
      name: patient.name,
      email: patient.email,
      token: generateToken(patient._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Backend error ", error: error.message });
  }
};

// login-patient-function
const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const patient = await Patient.findOne({ email });
    if (!patient) return res.status(400).json({ message: "Invalid email" });
    const compare = await bcrypt.compare(password, patient.password);
    if (!compare) return res.status(400).json({ message: "Invalid password" });
    res.json({
      id: patient._id,
      name: patient.name,
      email: patient.email,
      token: generateToken(patient._id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Backend error ", error: error.message });
  }
};

module.exports = { registerPatient, loginPatient };
