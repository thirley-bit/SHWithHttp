// // __tests__/sum-test.js
// const sum = require('../sum');
import sum from "src/sum";

test('测试sum', () => {
  expect(sum(1,2)).toBe(3);
});