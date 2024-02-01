const sinon = require('sinon')
const { expect } = require('chai')
const sendPaymentRequestToApi = require('./5-payment.js')

describe('sentPaymentRequestToApi with 100 and 20', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log')
  })

  afterEach(function() {
    spy.restore()
  })

  it('verify console log', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  })

  it('verify console log with 10, 10', function() {
    sendPaymentRequestToApi(10, 10)
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
    spy.restore()
  })
})
