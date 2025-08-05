const PDFDocument = require("pdfkit");

// download dummy report pdf for every test
const downloadReport = (req, res) => {
  try {
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=report.pdf");
    doc.pipe(res);
    doc.fontSize(20).text("Medical Test Report", { align: "center" });
    doc.moveDown();
    doc.fontSize(14).text("Patient Name: Avinash Guleria");
    doc.text("Test: Complete Blood Count (CBC)");
    doc.text("Result: Normal");
    doc.text("Date: 2025-08-04");
    doc.moveDown();
    doc.text("Thank you for choosing our lab.", { align: "center" });
    doc.end();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to generate report", error: error.message });
  }
};

module.exports = {downloadReport};