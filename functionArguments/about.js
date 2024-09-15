function multiply(num1, num2){
    console.log(arguments); //special object : arguments

    return num1*num2;
}

console.log(multiply(2, 2));

// but if for an argument the value is not passed it will be assigned undefined as default and trhe output would return NaN. it occurs so that the function doesnt break even though provided lesser arguments than expected. though it may lead to unexpected results in the funtion.
//eg:
console.log(multiply(2)); // NaN

// example
function product(n1, n2){
    let Multiply = 1;
    for(const num of arguments){
        Multiply *= num;
    }
    return Multiply;
}
console.log(product(2, 2, 4));