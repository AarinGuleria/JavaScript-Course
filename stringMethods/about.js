const name = "Steven";
console.log(typeof name);
//////////////////////////////////////////
const anotherName = new String("Joe");
console.log(typeof anotherName);
/////////////////////////////////////////
let sentence = " A new sentence ";
const doesIncludeNew = sentence.includes("new");
console.log(doesIncludeNew);

console.log(sentence[3]);
////////////////////////////////////////////
const startswithA = sentence.startsWith("A");
console.log(startswithA);
const endswith = sentence.endsWith("A");
console.log(endswith);
////////////////////////////////////////

let updatedSentence = sentence.replace('new', 'short');
console.log(updatedSentence);

trimmedSentence = sentence.trim();
console.log(trimmedSentence);

const wordsInSentence = sentence.split(' ');
console.log(wordsInSentence);

////////////////////////////////////////

let email = 'TesTEmail@gmail.com';
let lowercaseEmail = email.toLowerCase();
console.log(lowercaseEmail);