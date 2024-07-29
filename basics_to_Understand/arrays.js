let productColor = ['blue', 'green', 'yellow'];

console.log(productColor);
// Output: ['blue', 'green', 'yellow']

console.log(productColor[0]);
// Output: blue

console.log(productColor[0], productColor[1]);
// Output: blue green

productColor[0] = 34;
console.log(productColor[0], productColor[1]);

//Note-
/* Array is an onject, objects have a key value pairs and inthis case the key is an index value  */

console.log(productColor.length);