//local and global scopes:

//Global scope
var globalVar = "This is a global variable";
function globalFunction() {
    var localVar = "This is a local variable";
    console.log(globalVar);
    console.log(localVar);
}
globalFunction();
console.log(globalVar);
//console.log(localVar); // This will throw an error

//Local scope
function localFunction() {
    var localVar = "This is a local variable";
    console.log(globalVar);
    console.log(localVar);
}
localFunction();
console.log(globalVar);
//console.log(localVar); // This will throw an error

//Block scope
if (true) {
    var blockVar = "This is a block variable";
    let blockLet = "This is a block variable";
    console.log(blockVar);
    console.log(blockLet);
}
console.log(blockVar);
//console.log(blockLet); // This will throw an error

//Function scope
function functionScope() {
    var functionVar = "This is a function variable";
    console.log(functionVar);
}
functionScope();
//console.log(functionVar); // This will throw an error

//Lexical scope
var lexicalVar = "This is a lexical variable";
function outerFunction() {
    var outerVar = "This is an outer variable";
    function innerFunction() {
        var innerVar = "This is an inner variable";
        console.log(lexicalVar);
        console.log(outerVar);
        console.log(innerVar);
    }
    innerFunction();
}
outerFunction();
console.log(lexicalVar);
//console.log(outerVar); // This will throw an error

