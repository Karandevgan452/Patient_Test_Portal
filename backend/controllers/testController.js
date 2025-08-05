const Test = require("../models/Test");

// get-all-tests-available in lab
const getTests = async (req, res) => {
  try {
    const tests = await Test.find().sort({ name: 1 }); 

    res.status(200).json(tests);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch tests", error: error.message });
  }
};

module.exports = {getTests};
