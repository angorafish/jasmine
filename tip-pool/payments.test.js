describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = '100';
        tipAmtInput.value = '20';
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
    });

it('should add a new payment to allPayments when submitPaymentInfo()', function() {
submitPaymentInfo();

expect(Object.keys(allPayments).length).toEqual(1);
expect(allPayments['payment1'].billAmt).toEqual('100');
expect(allPayments['payment1'].tipAmt).toEqual('20');
expect(allPayments['payment1'].tipPercent).toEqual(20);
});

it('should not add new payment to submitPaymentInfo() with empty input', function() {
billAmtInput.value = '';
submitPaymentInfo();
expect(Object.keys(allPayments).length).toEqual(0);
});

it('should update payment #paymentTable on appendPaymentTable()', function() {
let curPayment = createCurPayment();
allPayments['payment1'] = curPayment;

appendPaymentTable(curPayment);
let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

expect(curTdList.length).toEqual(4);
expect(curTdList[0].innerText).toEqual('$100');
expect(curTdList[1].innerText).toEqual('$20');
expect(curTdList[2].innerText).toEqual('20%');
expect(curTdList[3].innerText).toEqual('X');
});

it('should create a new table element on createCurPayment()', function() {
billAmtInput.value = '100';
tipAmtInput.value = '20';

    let expectedPayment = {
    billAmt: '100',
    tipAmt: '20',
    tipPercent: 20,
}
expect(createCurPayment()).toEqual(expectedPayment);

billAmtInput.value = '';
tipAmtInput.value = '';
});

it('should not update summary with no payments', function() {
updateSummary()
expect(summaryTds[0].innerHTML).toEqual('$0');
expect(summaryTds[1].innerHTML).toEqual('$0');
expect(summaryTds[2].innerHTML).toEqual('$0');
});

})

it('should correctly update summary with one pyment', function() {
allPayments['payment1'] = {billAmt: '100', tipAmt: '15', tipPercent: 15};
updateSummary();
expect(summaryTds[0].innerHTML).toEqual('$100');
expect(summaryTds[1].innerHTML).toEqual('$15');
expect(summaryTds[2].innerHTML).toEqual('15%');
})