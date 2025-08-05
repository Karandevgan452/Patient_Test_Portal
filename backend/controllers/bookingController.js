const Booking = require("../models/Booking");
const Patient = require("../models/Patient");
const Test = require("../models/Test");

// book test appointment function
const bookTest = async (req, res) => {
  try {
    const { patientId, testId, bookingDate } = req.body;
    const patientExists = await Patient.findById(patientId);
    const testExists = await Test.findById(testId);
    if (!patientExists) {
      return res.status(404).json({ message: "Invalid patient ID" });
    }
    if (!testExists) {
      return res.status(404).json({ message: "Invalid test ID" });
    }
    const newBooking = await Booking.create({ patientId, testId, bookingDate });
    res
      .status(201)
      .json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Booking failed", error: error.message });
  }
};

// get Test-appointments of patients by id function
const getBookings = async(req , res) => {
    try {
        const patientId = req.user.id; 
        const bookings = await Booking.find({ patientId })
          .populate("testId")
          .populate("patientId", "name email");
        res.status(200).json(bookings);
    } catch(error){
        res.status(500).json({message : "Failed to fetch patient's bookings" , error : error.message});
    }
}

module.exports = {bookTest , getBookings};