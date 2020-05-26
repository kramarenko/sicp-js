const a_plus_abs_b = require('../main');


test('a plus abs b', () => {
  expect(a_plus_abs_b(1, 2)).toBe(3);
  expect(a_plus_abs_b(4, 5)).toBe(9);
  expect(a_plus_abs_b(-1, -3)).toBe(2);
  expect(a_plus_abs_b(5, -1)).toBe(6);
});