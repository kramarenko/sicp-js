const { qbrt, qube } = require('../1.8');


test('qbrt x', () => {
  expect(qbrt(27)).toBeCloseTo(3, 5);
  expect(qbrt(8)).toBeCloseTo(2, 5);
  expect(qbrt(125)).toBeCloseTo(5, 5);
  expect(qbrt(1728)).toBeCloseTo(12, 5);
  expect(qbrt(125000000)).toBeCloseTo(500, 5);
});

test('qube x', () => {
  expect(qube(3)).toBe(27);
  expect(qube(2)).toBe(8);
});