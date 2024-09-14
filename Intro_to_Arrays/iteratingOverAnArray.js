const numbers = [1, 2, 3, 4, 5];

for (let number of numbers){
    console.log(number);
    
} 

// Output:
/*
    1
    2
    3
    4
    5 
*/

//for each 
const n = [1,2,3,4,5];
n.forEach((n) => 
    console.log(n));

//for each with second parametewr as index
const N = [1,2,3,4,5];
N.forEach((N, index) => 
    console.log(`At index, ${index}: ${N}`));
