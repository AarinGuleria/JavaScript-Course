//Implement a function to accept a number.Then return "FizzBuzz" if divisible by3 and 5 or return "Fizz" if only divisible by 3 or return "Buzz" if only divisible by 5 or eturn the original number if not divisible by 3 or 5.

function fizzBuzz(number){
    if(number%3===0 && number%5===0){
        return "FizzBuzz";
    }else if(number%3===0){
        return "Fizz";
    }else if(number%5===0){
        return "Buzz";
    }else{
        return number;
    }
}

console.log(fizzBuzz(15)); //FizzBuzz
console.log(fizzBuzz(9)); // Fizz
console.log(fizzBuzz(10)); //Buzz
console.log(fizzBuzz(7)); // 7