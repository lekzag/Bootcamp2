const functions = {
    add: (num1,num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstname: 'Brad'};
        user['lastname'] = 'Mitchell';
        return user;
    }
}

/*function add (num1,num2) {
    return num1 + num2
}*/

module.exports = functions;
