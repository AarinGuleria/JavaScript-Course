// testing the elements against some condition we have : .every()  and  .some()

// .every() : checks if all the elements in the array pass a certain condition

// .some() : checks if at least one element in the array passes a certain condition 

// Example 1
let numbers = [1, 2, 3, 4, 5];
let greaterThanZero = numbers.every(number => number > 0);
console.log(greaterThanZero); // true

// Example 2
let numbers2 = [1, 2, 3, 4, 5];
let greaterThanZero2 = numbers2.some(number => number > 0);
console.log(greaterThanZero2); // true

// Example 3

const numbers1 = [2, 4, 6, 8, 10];
const even = numbers1.every(number => number % 2 === 0);
console.log(even); // true
console.log(`EvenNumber: ${even}`); 

// Example 4

const numbers3 = [1, 3, 5, 7, 8, 9];
const hasOneEvenNumber = numbers3.some(number => number % 2 === 0);
console.log(hasOneEvenNumber); // true