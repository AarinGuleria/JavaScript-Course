//combining arrays

const exapmleNumbersA = [1, 2, 3];
const exapmleNumbersB = [4, 5, 6];

const combinedArray = exapmleNumbersA.concat(exapmleNumbersB);

console.log(combinedArray);


//slicing array

const slicedArray = combinedArray.slice(2, 4); //here the second argument of .slice() is exclusive i.e not included
console.log(slicedArray);