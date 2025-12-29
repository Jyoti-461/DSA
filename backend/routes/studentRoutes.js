// routes/studentRoutes.js
const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { studentId, name } = req.body;
  let student = await Student.findOne({ studentId });

  if (!student) {
    student = new Student({ studentId, name });
    await student.save();
  }

  res.json(student);
});

module.exports = router;
