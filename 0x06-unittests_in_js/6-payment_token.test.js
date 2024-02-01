const getPaymentTokenFromAPI = require('./6-payment_token.js')
const { expect } = require('chai')

describe('getPaymentTokenFromAPI', function() {
  it('test a promise', function(done) {
    getPaymentTokenFromAPI(true).then(function(result) {
      expect(result).to.deep.equal({data: 'Successful response from the API'})
      done();
    })
  })
})
