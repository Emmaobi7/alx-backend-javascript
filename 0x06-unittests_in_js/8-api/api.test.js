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
