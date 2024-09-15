// filtering an array:

// .filter() : creates a new array with all elements that pass the test implemented by the provided function

// Example 1
let numbers = [1, 2, 3, 4, 5];
let oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers); // [ 1, 3, 5 ]

// Example 2
let employees = [
    { id: 1, name: 'Jen'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'John'},
    { id: 4, name: 'Mike'}
];
let employeesWithIdGreaterThan2 = employees.filter(employee => employee.id > 2);
console.log(employeesWithIdGreaterThan2); // [ { id: 3, name: 'John' }, { id: 4, name: 'Mike' } ]

// Example 3
let employees2 = [
    { id: 1, name: 'Jen'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'John'},
    { id: 4, name: 'Mike'}
];
let employeesWithIdGreaterThan2AndNameStartsWithJ = employees2.filter(employee => employee.id > 2 && employee.name.startsWith('J'));
console.log(employeesWithIdGreaterThan2AndNameStartsWithJ); // [ { id: 3, name: 'John' } ]