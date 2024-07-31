//Implement a function to accept two numbers and returns the maximum number.
//method 1
function maxNumber(a, b) {
  // console.log(a);
  // console.log(b);
  if (a > b) {
    return `${a} is greater than ${b}`;
  } else {
    return `${b} is greater than ${a}`;
  }
}
let a = 5;
let b = 3;
console.log(maxNumber(a, b));

// Implement a function to accept two numbers and returns the maximum number.
//method 2
function maxNumber2(c, d) {
  if (c > d) {
    return window.alert(`${c} is greater than ${d}`);
  } else {
    return window.alert(`${d} is greater than ${c}`);
  }
}

let c = parseFloat(window.prompt("Enter the first number:"));
let d = parseFloat(window.prompt("Enter the second number:"));

maxNumber2(c, d);


// above function maxnumber2 works on browser using index.html 


//method 3
function maxnum(n1, n2){
    return n1 >= n2 ? n1:n2;
}
console.log(maxnum(2,1)); //2