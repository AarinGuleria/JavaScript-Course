let numbers = [1,2,3,4,5];
for(const elements of numbers){
    console.log(elements);
}

console.log("------------------------");

const dog = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};
for(const key in dog){
    console.log(dog[key]);
}
console.log("-----------------------");

const dog1 = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};
const keys = Object.keys(dog1);
console.log(keys);
console.log("-----------------------");
const dog3 = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};
const values = Object.values(dog3);
console.log(values);
console.log("-----------------------");
const dog4 = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};
const entries = Object.entries(dog4);
console.log(entries);
console.log("-----------------------");
const dog2 = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};
for(const key of Object.keys(dog)){
    console.log(keys);
}

console.log("-----------------------");
const dog5 = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};
for(const entry of Object.values(dog)){
    console.log(entry);
}
console.log("-----------------------");

const dog6 = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};
for(const entry of Object.entries(dog)){
    console.log(entry);
}