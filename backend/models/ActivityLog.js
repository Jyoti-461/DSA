const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  studentId: String,
  examId: Number,          // ✅ ADD THIS
  event: String,
  timestamp: Number
});

module.exports = mongoose.model("ActivityLog", ActivitySchema);
