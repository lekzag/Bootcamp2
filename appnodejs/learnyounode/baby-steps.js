let result = 0;

process.argv.splice(0,2);

process.argv.forEach(function(element) {
    result += Number(element);
}); 

console.log(result);
