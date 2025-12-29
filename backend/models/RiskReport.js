// models/RiskReport.js
const mongoose = require("mongoose");

const RiskSchema = new mongoose.Schema({
  studentId: String,
  tabSwitches: Number,
  rapidAnswers: Number,
  avgTime: Number,
  riskScore: Number,
  riskLevel: String
});

module.exports = mongoose.model("RiskReport", RiskSchema);
