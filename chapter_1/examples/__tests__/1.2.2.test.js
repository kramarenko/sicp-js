const fib = require('../1.2.2');


test('fib n', () => {
  expect(fib(5)).toBe(5);
  expect(fib(10)).toBe(55);
  expect(fib(20)).toBe(6765);
  expect(fib(100)).toBe(354224848179262000000);
});.2