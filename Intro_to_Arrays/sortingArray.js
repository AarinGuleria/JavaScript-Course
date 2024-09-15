//.sort() method:

let characters = ['c', 'd', 'b', 'a'];
characters.sort();
console.log(characters); // [ 'a', 'b', 'c', 'd' ]


//.reverse() method:

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); //[ 5, 4, 3, 2, 1 ]

//////////////////////////////////////////

let employeess = [
    { id: 1, name: 'Jen'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'John'},
    { id: 4, name: 'Mike'}
];

employeess.sort((a, b) => {
    const lowercaseA = a.name.toLowerCase();
    const lowercaseB = b.name.toLowerCase();

    if(lowercaseA < lowercaseB){
        return -1;
    }
    if(lowercaseA > lowercaseB){
        return 1;
    }
    return 0;
});

console.log(employeess);
