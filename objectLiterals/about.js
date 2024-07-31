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

//Note: Js Objects-
/*
    it stores key value pairs.their purpose is to store State and behaviour. State is represented by properties and behaviour is repesented by functions within the object. when we specify a function within an ojbect we call it a method.
*/