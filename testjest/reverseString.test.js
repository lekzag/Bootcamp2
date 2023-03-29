const reverseString = require('./reverseString')

test('reverse the string', () => {
    expect(reverseString('test')).toEqual('tset');
})