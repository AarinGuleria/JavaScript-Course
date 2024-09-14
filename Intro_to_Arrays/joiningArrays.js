//join method: 

//The join method is used to join all elements of an array into a string.
//The join method returns a string and does not change the original array.
//The elements are separated by a specified separator. The default separator is a comma.
//Syntax: array.join(separator)
//The separator is optional. If no separator is specified, the elements are separated by a comma.

//Example:
const fruit = ['apple', 'banana', 'orange'];
const joinedFruit = fruit.join();
console.log(joinedFruit); // apple,banana,orange


//If you want to join the elements with a different separator, you can specify the separator as an argument to the join method.

//Example:
const Fruits = ['apple', 'banana', 'orange'];
const joinedFruits = Fruits.join(' - ');
console.log(joinedFruits); // apple - banana - orange


//If you want to join the elements without any separator, you can specify an empty string as the separator.

//Example:
const fruits = ['apple', 'banana', 'orange'];
const JoinedFruits = fruits.join('');
console.log(JoinedFruits); // applebananaorange


//The join method can be used to join numbers as well.
//Example:

const numbers = [1,2,3,4,5];
const joinedNumbers = numbers.join(', ');
console.log(joinedNumbers); // 1, 2, 3, 4, 5


//////////////////////////////////////////////////

//split method:
//The split method is used to split a string into an array of substrings.
//The split method returns an array and does not change the original string.
//The split method takes two arguments: a separator and an optional limit.
//Syntax: string.split(separator, limit)
//The separator is required. It specifies the character, or the regular expression, to use for splitting the string.
//The limit is optional. It specifies the maximum number of splits to be made.
//If the limit is not specified, the string is split into as many substrings as possible.
//Example:

const str = 'apple, banana, orange';
const fruitsArray = str.split(', ');
console.log(fruitsArray); // [ 'apple', 'banana', 'orange' ]

//If you want to split the string into an array of characters, you can specify an empty string as the separator.
//Example:
const sr = 'apple';
const characters = sr.split('');
console.log(characters); // [ 'a', 'p', 'p', 'l', 'e' ]

//If you want to split the string into an array of words, you can specify a space as the separator.
//Example:
const sentence = 'I love JavaScript';
const words = sentence.split(' ');
console.log(words); // [ 'I', 'love', 'JavaScript' ]


//Note:
// Method chanining

//You can chain the split method with other array methods to perform complex operations.
//Example:
const sentence1 = 'I love JavaScript';
const reversedWords = sentence1.split(' ').reverse();
console.log(reversedWords); // [ 'JavaScript', 'love', 'I' ]

//In the above example, the split method is chained with the reverse method to reverse the words in the sentence.
//The split method splits the sentence into an array of words, and the reverse method reverses the
//order of the words in the array.
//Note: The split method does not change the original string. It returns a new array of substrings.

const CourseName = 'Javascript for beginners';
const lowercaseCoursename = CourseName.toLowerCase();
const parts = lowercaseCoursename.split(' ');
const urlSlug = parts.join('-');
console.log(urlSlug);
// Output: javascript-for-beginners

//In the above example, the CourseName string is converted to lowercase using the toLowerCase method.
//Then, the split method is used to split the string into an array of words.
//Finally, the join method is used to join the words with a hyphen separator to create a URL slug.

//now we can may it more clean : 
const CoursName = 'Javascript for beginners';
const UrlSlug = CoursName.toLowerCase().split(' ').join('-');
console.log(UrlSlug);
// Output: javascript-for-beginners



