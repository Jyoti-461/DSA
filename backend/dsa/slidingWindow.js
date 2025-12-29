// dsa/slidingWindow.js
function detectRapidAnswers(times, window = 5000) {
  let count = 0;
  for (let t of times) {
    if (t < window) count++;
  }
  return count;
}

module.exports = { detectRapidAnswers };
