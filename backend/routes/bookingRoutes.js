const express = require("express");
const router = express.Router();
const { bookTest, getBookings } = require("../controllers/bookingController");
const authenticatePatient = require("../middleware/auth");

router.post("/", authenticatePatient, bookTest);
router.get("/:patientId", authenticatePatient, getBookings);

module.exports = router;
