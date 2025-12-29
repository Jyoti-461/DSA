const express = require("express");
const ActivityLog = require("../models/ActivityLog");
const { calculateRisk } = require("../dsa/riskCalculator");

const router = express.Router();

router.get("/risk/:studentId/:examId", async (req, res) => {
  try {
    const { studentId, examId } = req.params;

    const activities = await ActivityLog.find({
      studentId,
      examId: Number(examId)
    });

    const tabSwitches = activities.filter(a => a.event === "TAB_SWITCH").length;
    const rapidAnswers = activities.filter(a => a.event === "RAPID_ANSWER").length;

    const avgTime = 0;

    const { score, level } = calculateRisk(tabSwitches, rapidAnswers, avgTime);

    res.json({
      studentId,
      tabSwitches,
      rapidAnswers,
      avgTime,
      riskScore: score,
      riskLevel: level
    });

  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
