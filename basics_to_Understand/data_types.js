/*
Primitive types: can contain a single thing , whether it be a string , a number or a boolean */
//Strings can be initialized in three different ways:

let favoritefruit ='mango';
let favoriteIceCream = "chocolate";
let favoriteProgrammingLanguage = `JavaScript`; // backticks(`): which will create template literal.backticks provide more flexibility and functionality compared to single and double quotes.

/* 
    Backticks (`) in JavaScript are used to create template literals. Template literals provide several advantages over single (') and double (") quotes:

1.Multi-line Strings: Template literals allow for multi-line strings without the need for concatenation or escape characters.
2.String Interpolation: You can embed expressions inside a template literal using ${expression} syntax.
3.Tagged Templates: They allow you to call a function on the contents of the template literal.

// Using single or double quotes
let singleLine = 'This is a single line string';
let multiLine = 'This is a multi-line string\nthat spans multiple lines';

// Using backticks for template literals
let templateLiteral = `This is a multi-line string
that spans multiple lines`;

let name = 'John';
let greeting = `Hello, ${name}!`; // String interpolation

console.log(singleLine);
console.log(multiLine);
console.log(templateLiteral);
console.log(greeting);

*/

//numbers
let numberofdonuts = 12;
let pi = 3.14;

//BigInt
let verylargeNumber = 66598656596545n;

//boolean
let lovescoding = true;

//undefined
let favoriteColor;
console.log(favoriteColor);

//null: we use it when we want to explictily clear the value of a variable
favoritefruit = null;

//symbol: useed to create unique identifiers and objects 
const uniquekey = Symbol();

/* Reference type: object is known as reference type. It have more complex structuer. It holds data in key value pairs this enables us to store  more than one variable all in one */
let course = {
    title: 'JavaScript',
    rating: 5
};
