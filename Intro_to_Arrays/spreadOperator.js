//spread method

let a = [1, 2, 3];
let b = [4, 5, 6];

let combinedArray = [...a, ...b];
console.log(combinedArray);

//

let c = [1, 2];
let d = c;

//arrays are objects which means they are passed by reference so the references of both c and d both reference the same array in the memory , so the same object in memory so we could also utilize the spread operator in order to make a copy of an array so instead of let d = c here we can say :
// let d = [...c];
// so now d is a copy of c and not a reference to c

