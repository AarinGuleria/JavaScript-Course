// falsy values in JS are: 
/* 
    undefined, null, 0, false, "", NaN
*/

console.log(false || 'Steve');

//javascript conducts short-circuit evaluations 
// it evaluates from left to right 
//eg:

console.log(false || 1 || 2); //1 