// implement 2 functions. For first function , have it accept an array as a parameter which contains a list of numbers. Then console log the even numbers in the array. For second function , have it accept an array and log the odd numbers.

function evennum(arr){
    for(let i=0;i<arr.length; i++){
        if(arr[i]%2===0){
            console.log(arr[i]);
        }
    }
}
evennum([1,2,3,4,5,6,7,8,9,10]);
console.log("----------------");

function oddnum(arr){
    for(let i=0;i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
}
oddnum([1,2,3,4,5,6,7,8,9,10]);