// dsa/queueLogic.js
function getNextQuestion(queue) {
  return queue.shift(); // FIFO
}

module.exports = { getNextQuestion };
