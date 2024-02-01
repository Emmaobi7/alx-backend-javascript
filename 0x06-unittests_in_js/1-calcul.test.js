const assert = require('assert')
const calculateNumber = require('./1-calcul.js')

describe('Test for advanced calc funtion', function() {
  it('should return SUM or sub or DIv of two numnbbers', function() {
    let res = calculateNumber('SUM', 1.4, 4.5);
    assert.equal(res, 6)
    let res1 = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.equal(res1, -4)
    let res2 = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.equal(res2, 0.2);
    let res3 = calculateNumber('DIVIDE', 1.4, 0);
    assert.equal(res3, 'Error');
  })

  it('should return div of number', function() {
    assert.equal(calculateNumber('DIVIDE', 5, 1), 5)
  })

  it('should give erro as string', function() {
    assert.equal(calculateNumber('DIVIDE', 5, 0), 'Error')
  })

  it('should do subtraction', function() {
    assert.equal(calculateNumber('SUBTRACT', 5, 3), 2)
  })
})
