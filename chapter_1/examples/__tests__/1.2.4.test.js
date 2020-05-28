const exp = require('../1.2.4');

test('exp b n', () => {
  expect(exp(5, 2)).toBe(25);
  expect(exp(10, 2)).toBe(100);
  expect(exp(3, 3)).toBe(27);
  expect(exp(6, 2)).toBe(36);
});