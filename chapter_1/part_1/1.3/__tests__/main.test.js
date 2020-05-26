const { sumOfBiggestSquares, sumOfBiggestSquares2 } = require('../main');


test('sum of biggest squares', () => {
  expect(sumOfBiggestSquares(1, 2, 3)).toBe(13);
  expect(sumOfBiggestSquares(4, 2, 4)).toBe(32);
  expect(sumOfBiggestSquares(5, 1, 4)).toBe(41);
  expect(sumOfBiggestSquares(10, 9, 4)).toBe(181);
});

test('sum of biggest squares 2', () => {
  expect(sumOfBiggestSquares2(1, 2, 3)).toBe(13);
  expect(sumOfBiggestSquares2(4, 2, 4)).toBe(32);
  expect(sumOfBiggestSquares2(5, 1, 4)).toBe(41);
  expect(sumOfBiggestSquares2(10, 9, 4)).toBe(181);
})