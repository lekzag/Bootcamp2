const chunkArray = require('./chunk');

test('chunkArray function divide array into chunks of specific length', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });