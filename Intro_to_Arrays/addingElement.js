const numbers = [5, 4, 3, 2, 1];

// we can add element to : end, starting, middle

// add element to end
numbers.push(6);
console.log(numbers); // [5, 4, 3, 2, 1, 6]

// add element to start
numbers.unshift(0);
console.log(numbers); // [0, 5, 4, 3, 2, 1, 6]

// add element to middle
numbers.splice(3, 0, 55);// (start,delete,the element to add)
console.log(numbers);
// [
//  0, 5, 4, 55,
//  3, 2, 1,  6
// ]