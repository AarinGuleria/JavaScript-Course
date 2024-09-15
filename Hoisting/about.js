// hoisting :

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.
// This means that even if you declare a variable or function after it's being used, it will
// still be recognized.
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// It's not a feature, but a behavior of JavaScript's interpreter.
// JavaScript only hoists declarations, not initializations.
// Function declarations are hoisted before variable declarations.
// Function expressions are not hoisted.
// Class declarations are not hoisted.
// let and const are hoisted but not initialized.
// var is hoisted and initialized with undefined.
// let and const are block-scoped.
// var is function-scoped.


// Function Declaration
console.log(declaredFunction()); // Output: "Declared Function"

function declaredFunction() {
    return "Declared Function";
}

// Function Expression
try {
    console.log(expressionFunction()); // Throws TypeError
} catch (e) {
    console.log(e); // Output: TypeError: expressionFunction is not a function
}

var expressionFunction = function() {
    return "Expression Function";
};

console.log(expressionFunction()); // Output: "Expression Function"