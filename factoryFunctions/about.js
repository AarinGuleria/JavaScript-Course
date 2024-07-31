const dog = {
    name: 'Max',
    breed: 'Dachshund',
    age: 5,
    weightInPound: 12,
    //above are the properties called state
    //down are function called behaviour
    eat: function(){           //anonymus function
        console.log('Chomp!');
    },
    bark(){
        console.log('Woof!'); //this function within an object we call it method 
    }
}

console.log('------------------------');

function getDog(name, breed, age, weightInPounds){
    return {
        name: name, //or can be writen only as name as her both key and value have smae duplicate values so js knows that and we can write just name her 
        breed: breed,// eg: breed,
        age: age,//age,
        weightInPounds: weightInPounds,
        eat: function(){
            console.log('Chomp!');
        },
        bark(){
            console.log('Woof!');
        }
    }
}
const anotherDog = getDog('Marley', 'chocolate lab', 3, 60);
console.log(anotherDog);