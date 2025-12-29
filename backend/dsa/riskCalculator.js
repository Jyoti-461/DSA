function calculateRisk(tabSwitches, rapidAnswers, avgTime) {
  let score = 0;

  score += tabSwitches * 15;      // 2 → 30
  score += rapidAnswers * 10;     // 1 → 10

  if (avgTime < 4000) score += 10;

  let level = "LOW";
  if (score >= 60) level = "HIGH";
  else if (score >= 30) level = "MEDIUM";

  return { score, level };
}

module.exports = { calculateRisk };
