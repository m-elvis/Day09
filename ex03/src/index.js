function myEqualFunction(num) {
    if(num === 23) {
        return "Equal";
    }
    return "notEqual";
}
console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction('23'));
console.log(myEqualFunction("text"));
module.exports = myEqualFunction;
