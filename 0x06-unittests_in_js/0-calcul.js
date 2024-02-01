function calculateNumber(a, b) {
  let aR = Math.round(a)
  let bR = Math.round(b)
  return Math.ceil(aR + bR);
}

module.exports = calculateNumber;
