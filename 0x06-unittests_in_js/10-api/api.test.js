const { expect } = require('chai')
const request = require('request')

describe('test for / get route', function() {
  it('should test for correct status', function(done) {
    request.get('http://localhost:7865/', function(err, res, body) {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal('Welcome to the payment system');
      done();
    })
  })

  it('/ route only', function(done) {
    request.get('http://localhost:7865/..', function(err, res, body) {
      expect(res.statusCode).to.be.equal(404)
      done();
    })
  })
})


describe('Test for cart page', function() {
  it('correct statuscode', function(done) {
    request.get('http://localhost:7865/cart/2', function(err, res, body) {
      expect(res.statusCode).to.be.equal(200)
      expect(res.body).to.be.equal('Payment methods for cart 2')
      done();
    })
  })

  it('correst statuscode', function(done) {
    request.get('http://localhost:7865/cart/-2', function(err, res, body) {
      expect(res.statusCode).to.be.equal(404)
      done();
    })
  })

  it('correct statuscode', function(done) {
    request.get('http://localhost:7865/cart/2ewcu34cb', function(err, res, body) {
      expect(res.statusCode).to.be.equal(404)
      done();
    })
  })
})


describe('Test for /login', function() {
  it('test status code', function(done) {
      request.post('http://localhost:7865/login', {json: {userName: 'Betty'}}, function(err, res, body) {
        expect(res.statusCode).to.be.equal(200)
        expect(body).to.be.equal(`Welcome :Betty`)
        done();
      })
  })
})


describe('Test for /available_payments', function() {
  it('test for status code and correct object', function(done) {
    request.get('http://localhost:7865/available_payments', function(err, res, body) {
      expect(res.statusCode).to.be.equal(200)
      expect(JSON.parse(body)).to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false }})
      done()
    })
  })
})
