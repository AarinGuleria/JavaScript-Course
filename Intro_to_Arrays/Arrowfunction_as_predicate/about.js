// An arrow function is an alternative syntax to function declaration syntax. You would assign it toa variable and define it with parenthesis and then use the symbol for equal sign and greater than symbol and specify the code block.


//function declaration
function add(n1, n2){
    return n1 + n2;
}

//arrow functon: commonly used for call back functions
const Add = (num1, num2) => {
    return num1 + num2;
}

//eg:

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

// const employee = employees.find(function(e){
//     return e.name === 'John'
// });
const employee = employees.find((e) => {
    return e.name === 'John'
})



console.log(employee);