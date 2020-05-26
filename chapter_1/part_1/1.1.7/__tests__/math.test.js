const { sqrt, square, abs} = require('../math');


test('square x', () => {
  expect(square(5)).toBe(25);
  expect(square(4)).toBe(16);
  expect(square(15)).toBe(225);
});

test('sqrt x', () => {
  expect(sqrt(100)).toBeCloseTo(10, 5);
  expect(sqrt(16)).toBeCloseTo(4, 5);
  expect(sqrt(625)).toBeCloseTo(25, 5);
});