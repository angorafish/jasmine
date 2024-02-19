
it("should calculate the monthly rate correctly", function () {
  const values = {
amount: 15000,
years: 10,
rate: 6.5,
  };
expect(calculateMonthlyPayment(values)).toEqual('170.32');
});


it("should return a result with 2 decimal places", function() {
  const values = {
amount: 10043,
years: 8,
rate: 5.8
  };
expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle a large loan amount", function() {
const values = {
  amount: 110000,
  years: 8,
  rate: 12
};
expect(calculateMonthlyPayment(values)).toEqual('1787.81');
});

it("should handle a very small interest rate", function() {
  const values = {
    amount: 20000,
    years: 15,
    rate: 0.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('113.64');
  });
  

it("should handle a high interest rate", function() {
  const values = {
    amount: 20000,
    years: 10,
    rate: 33
  };
  expect(calculateMonthlyPayment(values)).toEqual('572.06');
  });
  

it("should handle a long term loan", function() {
  const values = {
    amount: 10000,
    years: 30,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('53.68');
  });
  

it("should handle a very short term loan", function() {
  const values = {
    amount: 12000,
    years: 0.5,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('2058.74');
  });