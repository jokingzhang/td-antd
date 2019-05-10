import sum from '../src/sum';
// const sum = require('../src/sum.js');

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});