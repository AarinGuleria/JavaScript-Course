//Logical operators: ( ||, && , )
console.log('Logical OR operators');
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

let hasReservation = true;
let acceptingWalkIns = false;

const hasAccessToTable = hasReservation || acceptingWalkIns;
console.log(hasAccessToTable); //true

console.log('-------------------');

console.log('Logical And Operator'); //operates from left to right
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); //  false
console.log(false && false); // false

let age = 16;
let hascar = true;

const canDrive = age >= 16 && hascar;
console.log(canDrive); //true

console.log('-------------------');

// Not operator(!)
console.log(!true);//false 

let isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;

console.log(isRestaurantOpen); //false

console.log('-------------------');

//Null coalescing operator
//The nullish coalescing operator (??) in JavaScript is used to provide a default value when dealing with null or undefined. It is particularly useful when you want to assign a fallback value if the original value is null or undefined. The syntax is as follows: variable ?? fallbackValue. If the variable is null or undefined, it returns the fallbackValue; otherwise, it returns the variable

let user = null;
let username = user ?? 'Guest';
console.log(username); //Guest

/*
    The logical OR operator (||) can also be used to provide a fallback value, but it treats false, 0, NaN, "" (empty string), null, and undefined as falsy values. The nullish coalescing operator only treats null and undefined as nullish values.

In this example, the logical OR operator (||) treats the empty string ("") as falsy and assigns defaultUser to currentUser. The nullish coalescing operator (??) does not treat the empty string as nullish, so currentUser remains an empty string.

Summary
The nullish coalescing operator (??) is useful when you want to provide a default value only for null or undefined, without affecting other falsy values like 0, false, or "".


let user = "";
let defaultUser = "Guest";

let currentUser = user || defaultUser;
console.log(currentUser); // Output: "Guest"

currentUser = user ?? defaultUser;
console.log(currentUser); // Output: ""


*/