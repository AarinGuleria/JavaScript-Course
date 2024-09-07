const numbers = [1, 2, 3, 4, 5];

// Method 1: Using pop in a while loop
let ans;
while (numbers.length > 0) {
    ans = numbers.pop();
}
console.log(ans); // Output: 1

/////////////////////////////////////////

// Method 2: Setting length to 0
const numbers2 = [1, 2, 3, 4, 5];
numbers2.length = 0;
console.log(numbers2); // Output: []

//////////////////////////////////////////

// Method 3: Using splice
const numbers3 = [1, 2, 3, 4, 5];
const deletedNumbers = numbers3.splice(0, numbers3.length);
console.log(`deletedNumbers: ${deletedNumbers}`); // Output: deletedNumbers: 1,2,3,4,5