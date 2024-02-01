const app = require('./api.js')
const { expect } = require('chai')
const request = require('request')

describe('test for / get route', function() {
  it('should test for correct status', function(done) {
    this.timeout(0)
    request.get('http://localhost:7865/', function(err, res, body) {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal('Welcome to the payment system');
      done();
    })
  })

  it('/ route only', function(done) {
    this.timeout(0)
    request.get('http://localhost:7865/..', function(err, res, body) {
      expect(res.statusCode).to.be.equal(404)
      done();
    })
  })
})


describe('Test for cart page', function() {
  it('correct statuscode', function(done) {
    this.timeout(0)
    request.get('http://localhost:7865/cart/2', function(err, res, body) {
      expect(res.statusCode).to.be.equal(200)
      expect(res.body).to.be.equal('Payment methods for cart 2')
      done();
    })
  })

  it('correst statuscode', function(done) {
    this.timeout(0)
    request.get('http://localhost:7865/cart/-2', function(err, res, body) {
      expect(res.statusCode).to.be.equal(404)
      done();
    })
  })

  it('correct statuscode', function(done) {
    this.timeout(0)
    request.get('http://localhost:7865/cart/2ewcu34cb', function(err, res, body) {
      expect(res.statusCode).to.be.equal(404)
      done();
    })
  })
})
