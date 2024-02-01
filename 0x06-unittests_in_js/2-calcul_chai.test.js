const { expect } = require('chai')
const calculateNumber = require('./2-calcul_chai.js')

describe('Test for advanced calc funtion', function() {
  it('should return SUM or sub or DIv of two numnbbers', function() {
    let res = calculateNumber('SUM', 1.4, 4.5);
    expect(res).to.be.equal(6)
    let res1 = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(res1).to.be.equal(-4)
    let res2 = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(res2).to.be.equal(0.2)
    let res3 = calculateNumber('DIVIDE', 1.4, 0);
    expect(res3).to.be.equal('Error')
  })

  it('should return div of number', function() {
    expect(calculateNumber('DIVIDE', 5, 1)).to.be.equal(5)
  })

  it('should give erro as string', function() {
    expect(calculateNumber('DIVIDE', 5, 0)).to.be.equal('Error')
  })

  it('should do subtraction', function() {
    expect(calculateNumber('SUBTRACT', 5, 3)).to.be.equal(2)
  })
})
