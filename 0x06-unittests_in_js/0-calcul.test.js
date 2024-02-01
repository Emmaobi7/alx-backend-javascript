const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe('Test add function', function() {
  it('should return sum of two numbers', function() {
    let res = calculateNumber(1, 3)
    assert.equal(res, 4);
    let res1 = calculateNumber(1, 3.7)
    assert.equal(res1, 5)
    let res2 = calculateNumber(1.2, 3.7)
    assert.equal(res2, 5)
    let res3 = calculateNumber(1.5, 3.7)
    assert.equal(res3, 6)
  })

  it('one negative one positive', function() {
    assert.equal(calculateNumber(5, -3), 2)
  })

  it('two negative addition', function() {
    assert.equal(calculateNumber(-5, -3), -8)
  })

  it('just add them huh', function() {
    assert.equal(calculateNumber(0, 0.1), 0)
  })
})
