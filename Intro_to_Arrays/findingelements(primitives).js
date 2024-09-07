//We can check if the array contains primitive value and that is : 
/*
    .indexOf() : from left to right
    .lastIndexOf()
    .includes()
*/

const numbers = [5, 4, 3, 2 , 1];

const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree); // 2 
console.log(numbers[indexOfThree]); // 3

////////////////////////////////////////////////////////////

const indexOfThreeFromRight = numbers.lastIndexOf(3);
console.log(indexOfThreeFromRight); // 2
console.log(numbers[indexOfThreeFromRight]); // 3

const indexOfTen = numbers.lastIndexOf(10);
console.log(indexOfTen); // -1
console.log(numbers[indexOfTen]); // undefined

////////////////////////////////////////////////////////////

const indexofNine = numbers.includes(9);
if(!numbers.includes(9)){
    console.log('9 is not in the array');
}