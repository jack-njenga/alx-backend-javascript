const sendPaymentRequestToApi = require("./4-payment");
const expect = require("chai").expect;
const sinon = require("sinon");
const Utils = require('./utils');

describe("sendPaymentRequestToApi()", () => {
    it("sendPaymentRequestToApi test", () => {
        const bigBrother = sinon.spy(console);
        const dummy = sinon.stub(Utils, 'calculateNumber');

        dummy.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
        expect(dummy.callCount).to.be.equal(1);
        expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
        expect(bigBrother.log.callCount).to.be.equal(1);
        dummy.restore();
        bigBrother.log.restore();
    });
});
