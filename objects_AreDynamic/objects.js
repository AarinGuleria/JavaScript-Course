const person = {
    name: 'Steve'
};

console.log(person);

//added a new prop named favouritefood
person.favouritefood = 'tacos';
console.log(person);


person.favouriteIceCream = 'Chocolate';
console.log(person);

//deleting a prop
delete person.favouritefood;
console.log(person);

//adding methods 
person.eat = function(){
    console.log('Start eating');
}

person.eat();