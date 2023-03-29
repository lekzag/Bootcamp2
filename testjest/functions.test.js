const functions = require('./functions')

test('Adds 2 + 2 to equals 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

test('Should be Null', () => {
    expect(functions.isNull()).toBeNull();
})

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('user should be Brad Mitchell', () => {
    expect(functions.createUser()).toEqual({firstname: 'Brad', lastname: 'Mitchell'});
})

/*function test () {
    expect(functions(2,2)).toBe(4);
}*/