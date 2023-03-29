const isAnagram = require('./anagram');

test('function return if is an anagram', () => {
    expect(isAnagram('module', 'eludom')).toBe(true);
  });