// models/Response.js
const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
  studentId: String,
  questionId: String,
  answer: String,
  timeTaken: Number
});

module.exports = mongoose.model("Response", ResponseSchema);
