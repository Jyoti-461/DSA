// routes/examRoutes.js
const express = require("express");
const ActivityLog = require("../models/ActivityLog");
const router = express.Router();

router.post("/activity", async (req, res) => {
  const log = new ActivityLog(req.body);
  await log.save();
  res.json({ message: "Activity logged" });
});

module.exports = router;
