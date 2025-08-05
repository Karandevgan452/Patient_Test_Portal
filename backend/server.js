// imported dependencies
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
//db import
const connectDB = require("./config/db");
// routes imports
const patientRoutes = require("./routes/patientRoutes");
const testRoutes = require("./routes/testRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Backend is working...");
});

app.use("/api/patients" , patientRoutes);
app.use("/api/tests" , testRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/report" , reportRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
