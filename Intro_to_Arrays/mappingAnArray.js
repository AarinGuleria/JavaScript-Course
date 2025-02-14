//.map() function:

// The .map() function is used to iterate over an array and manipulate or change the elements in the array.
// It returns a new array with the results of applying the provided function on every element in this array
// The .map() function does not change the original array.

// syntax of .map() :
// array.map(function(currentValue, index, arr), thisValue)

// The .map() function takes a callback function as an argument and this callback function takes three arguments:
// currentValue: the current element being processed in the array.
// index: the index of the current element being processed in the array.
// array: the array that the map was called upon.
// The .map() function returns a new array with the results of applying the provided function on every element in this array.
// The .map() function does not change the original array.

// Example 1.1
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [ 2, 4, 6, 8, 10 ]

// Example 1.2
const characters = ['a', 'b', 'c', 'd'];
const upperCaseCharacters = characters.map(char => char.toUpperCase());
console.log(upperCaseCharacters); // [ 'A', 'B', 'C', 'D' ]

// Example 2
let employees = [
    { id: 1, name: 'Jen'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'John'},
    { id: 4, name: 'Mike'}
];
let employeeNames = employees.map(employee => employee.name);
console.log(employeeNames); // [ 'Jen', 'Bob', 'John', 'Mike' ]

// Example 3
let employees2 = [
    { id: 1, name: 'Jen'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'John'},
    { id: 4, name: 'Mike'}
];
let employeesWithIdGreaterThan2 = employees2.filter(employee => employee.id > 2).map(employee => employee.name);
console.log(employeesWithIdGreaterThan2); // [ 'John', 'Mike' ]

// Example 4
let employees3 = [
    { id: 1, name: 'Jen'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'John'},
    { id: 4, name: 'Mike'}
];
let employeesWithIdGreaterThan2AndNameStartsWithJ = employees3.filter(employee => employee.id > 2 && employee.name.startsWith('J')).map(employee => employee.name);
console.log(employeesWithIdGreaterThan2AndNameStartsWithJ); // [ 'John' ]

// Example 5

const employees5 = [
    { id: 1, name: 'Jen', email: 'Ali@gmail.com'},
    { id: 2, name: 'Bob', email: 'Ai@gmail.com'},
    { id: 3, name: 'John', email: 'li@gmail.com'},
    { id: 4, name: 'Mike', email: 'i@gmail.com'}
];
const updatedEmployesss = employees5.map(employee5 => ({
    ...employee5,
    email: employee5.email.toLowerCase()
}));
console.log(updatedEmployesss);
