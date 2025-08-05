const express = require("express");
const router = express.Router();
const { downloadReport } = require("../controllers/reportController");
const authenticatePatient = require("../middleware/auth");

router.get("/download", authenticatePatient, downloadReport);

module.exports = router;
