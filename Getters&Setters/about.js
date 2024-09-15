// getters and setters:

// 1. getters and setters are used to define computed properties.
// 2. getters are used to get the value of a property.
// 3. setters are used to set the value of a property.
// 4. getters and setters are used to define computed properties.


// Example:

const Course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours'
};
console.log(`${Course.name} is ${Course.duration}`);

// Output: JavaScript for Beginners is 3 hours

// but modern JS give us a more sofisticated mechanism to work with properties such as methods:

const course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    get courseDetails() {
        return `${this.name} is ${this.duration} long`;
    },
    set courseDetails(courseDetails) {
        const parts = courseDetails.toString().split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

course.courseDetails = 'javascript Pro is 10 hours';

console.log(course.courseDetails);
// Output: JavaScript for Beginners is 3 hours long

/////////////////////////////

//get and set :
//get is used to get the value of a property
//set is used to set the value of a property
//get and set are used to define computed properties

// syntax:
// get propertyName(){
//     return this._propertyName;
// }
// set propertyName(value){
//     this._propertyName = value;
// }

// Example:
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
const person = new Person('John');
console.log(person.name);
person.name = 'Bob';
console.log(person.name);
