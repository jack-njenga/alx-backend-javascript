const sendPaymentRequestToApi = require("./3-payment.js");
const expect = require("chai").expect;
const sinon = require("sinon");

function testSpy(a, b, sendPaymentRequestToApi) {
    sendPaymentRequestToApi(a, b);
}

describe("sendPaymentRequestToApi()", function() {
    it("sendPaymentRequestToApi test", function() {
        spy = sinon.spy();
        console.log(testSpy(1, 2, spy));
        expect(spy.calledOnce);
    });
});