//purpose of constructor function is to contruct the initial state of an object. When creating a constructor function we use pascal notification.
// where as we would use camel case notation for variables and function names.Contructor functions use a special keyword called 'this' refernces the object thats calling this code, so when you see the keyword this , you can think of it as this current object. Constructor function is to have the name of it be a noun rather than a verb so shiow an example of a constructor function:  

function getDog(name, breed, age, weightInPounds){
    return {
        name,
        breed,
        age,
        weightInPounds,
        eat: function(){
            console.log(this.name + ': Chomp!');
        },
        bark(){
            console.log(this.name + ': Woof!');
        }
    }
}
function Dog(name, breed, age, weightInPounds){
    //this = {};

    //Add properties to this
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    this.eat = function(){
        console.log(this.name + ': Chomp!');
    }
    this.bark = function(){
        console.log(this.name + ': Woof!');
    }

    //return this;
}

const dog1 = new Dog('Rex', 'Golden Retriever', 3, 60);
console.log(dog1);