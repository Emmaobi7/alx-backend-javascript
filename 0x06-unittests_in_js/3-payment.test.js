const sinon = require('sinon');
const Utils = require('./utils.js')
const { expect } = require('chai')
const sendPaymentRequestToApi = require('./3-payment.js')

describe('sendPaymentRequestToApi', function() {
  it('same math', function() {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore()
  })
})
