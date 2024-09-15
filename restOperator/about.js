// rest operator:
// 1. rest operator is used to collect all the remaining elements into an array.
// 2. It is used to collect the arguments of a function.
// 3. It is used to copy the array.
// 4. It is used to collect the parameters of a function.
// 5. It is used to collect the destructuring of an array.
//
// Syntax:
// function functionName(...args){
//     // code block
// }

// Example 1
function multiply(num1, num2){
    console.log(arguments); //special object : arguments

    return num1*num2;
}
multiply(5,6); //arguments : [5,6]

// Example 2
function sum(...args){
    console.log(args);
}
sum(1,2,3,4,5); //[1,2,3,4,5]

// Example 3
function sum1(...args){
    return args.reduce((accumulator, current) => accumulator + current);
}
console.log(sum1(1,2,3,4,5)); //15

// Example 4
function multiply(multiplier, ...numbers){
    return numbers.map(number => number * multiplier);
}
