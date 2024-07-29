//1.output(simple way to output data to the console)
console.log('Hello world');

//2.variable is a name storage for data.
var firstName = 'steve';//old

let firstName = 'John';//new way 

//3. declaration type for a variable
let firstName;
firstName = 'John';

let firstName = 'John', lastName = 'Doe';

//4. a real life analogy
let message = 'Hello';
message = 'world';
// so the previous string which we had as hello will be garbage collected by JS and the new string that we assigned it to will be stored in the memory locaation.
console.log(message);

//5. const declaration
const christmas_2024 = '12.25.2024';

// christmas_2024 = '12.25.2524'; //shows error

console.log(christmas_2024);

// ----------------------------------//

//In Js the data that we use can belong to two catogories:
//1. Primitive data types - 
//2. Reference data types -