// let na dvar keywords:

// Let and var keywords:
//
// The let keyword was introduced in ES6 (ECMAScript 2015) to provide block scoping. Variables declared with let are only available within the block in which they are defined. This is in contrast to the var keyword, which provides function scoping.

// The var keyword is function-scoped, meaning that variables declared with var are available throughout the function in which they are defined. This can lead to unexpected behavior, as variables declared with var can be accessed outside of the block in which they are defined.

// The let keyword is block-scoped, meaning that variables declared with let are only available within the block in which they are defined. This can help prevent unintended side effects and make code easier to reason about.

// In general, it is recommended to use the let keyword instead of var when declaring variables in modern JavaScript code. This can help prevent common bugs and make code more maintainable.

// Example:
//
// // Using var keyword
// function varExample() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x); // Output: 10

// // Using let keyword
// function letExample() {
//     if (true) {
//         let y = 20;
//     }
//     console.log(y); // ReferenceError: y is not defined
// }

// In the varExample function, the variable x is declared with the var keyword and is accessible outside of the block in which it is defined. In the letExample function, the variable y is declared with the let keyword and is only accessible within the block in which it is defined.
// letExample(); // ReferenceError: y is not defined

// In this example, the let keyword is used to declare a variable y within a block. When trying to access the variable outside of the block, a ReferenceError is thrown because the variable is not defined in the outer scope.


// 
function display(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);
}
display(); 
//output:
// 0
// 1
// 2
// 3
// 4
// ReferenceError: i is not defined

//
function Display(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);
}
display(); // output:
// 0
// 1
// 2
// 3
// 4
// 5
// In this example, the for loop is used to iterate over a range of numbers. The let
// keyword is used to declare the variable i, which is only accessible within the block
// of the for loop. When trying to access the variable outside of the block, a
// ReferenceError is thrown because the variable is not defined in the outer scope.
//
