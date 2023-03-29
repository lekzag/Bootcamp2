const chunk = require('./chunk');

test('chunk', () => {
    expect(chunk('test')).toEqual('tset');
})