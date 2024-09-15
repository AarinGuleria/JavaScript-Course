// reducing an array:

// The .reduce() function is used to reduce the array to a single value.
// The .reduce() function takes a callback function as an argument and this callback function takes four arguments:

// accumulator: the initial value or the previously returned value of the function.
// currentValue: the current element being processed in the array.
// index: the index of the current element being processed in the array.
// array: the array that the reduce was called upon.

// The .reduce() function returns a single value after applying the provided function on every element in this array.
// The .reduce() function does not change the original array.

// syntax of .reduce() :
// array.reduce(function(accumulator, currentValue, index, arr), initialValue)
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)


// example: for sum of the elements of an array
const numbers1 = [1, 2, 3, 4, 5];
const sum1 = numbers1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(`Total sum: ${sum1}`) ;



// Example 1
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

// Example 2
let numbers2 = [1, 2, 3, 4, 5];
let product = numbers2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // 120

// Example 3
let employees = [
    { id: 1, name: 'Jen'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'John'},
    { id: 4, name: 'Mike'}
];
let employeeNames = employees.reduce((accumulator, employee) => {
    accumulator.push(employee.name);
    return accumulator;
}, []);
console.log(employeeNames); // [ 'Jen', 'Bob', 'John', 'Mike' ]

// Example 4
let employees2 = [
    { id: 1, name: 'Jen'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'John'},
    { id: 4, name: 'Mike'}
];
let employeesWithIdGreaterThan2 = employees2.filter(employee => employee.id > 2).reduce((accumulator, employee) => {
    accumulator.push(employee.name);
    return accumulator;
}, []);
console.log(employeesWithIdGreaterThan2); // [ 'John', 'Mike' ]

