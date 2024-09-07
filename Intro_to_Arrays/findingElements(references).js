// we can use : .find() and .findIndex() method

const employees = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Micheal Scoot',
    },
    {
        id: 3,
        name: 'Pam',
    },
];

const employee = employees.find(function(e){
    return e.name === 'John'
});
console.log(employee);