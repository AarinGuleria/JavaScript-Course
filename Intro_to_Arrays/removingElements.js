// We have three ways to remove the elements:
/*
    1> .pop() : to remove from the end
    2> .splice() : to remove from the middle. here the first element is the index to start from and the second is how many elements to delete .
    3> .shift() : to remove from the beginning
*/

// Example 1
const numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); // [1, 2, 3, 4]

// Example 2
const numbers1 = [1, 2, 3, 4, 5];
numbers1.shift();
console.log(numbers1); // [2, 3, 4, 5]

// Example 3
const numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(2, 1);
console.log(numbers2); // [1, 2, 4, 5]

// Example 4
const numbers3 = [1, 2, 3, 4, 5];
numbers3.splice(1, 3);
console.log(numbers3); // [1, 5]

// Example 5
const numbers4 = [1, 2, 3, 4, 5];
numbers4.splice(1, 2);
console.log(numbers4); // [1, 4, 5]

// Example 6
const numbers5 = [1, 2, 3, 4, 5];
numbers5.splice(0, 3);
console.log(numbers5); // [4, 5]

// Example 7
const numbers6 = [1, 2, 3, 4, 5];
numbers6.splice(0, 4);
console.log(numbers6); // [5]
