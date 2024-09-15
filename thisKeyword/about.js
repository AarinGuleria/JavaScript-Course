const course = {
  name: "Javascript for Beginners",
  start() {
    console.log(this.name);
  },
};
course.start();
//output: Javascript for Beginners

// In this example, the course object has a name property and a start method. The start method uses the this keyword to access the name property of the course object and log it to the console. When the start method is called, it logs the value of the name property to the console.

// The this keyword is used to refer to the current object in which the code is being executed. In this case, this refers to the course object, allowing the start method to access the name property of the object.

//

const Course = {
  name: "Javascript for Beginners",
  start: () => {
    console.log(this.name);
  },
};
Course.start();
//output: undefined

// In this example, the Course object has a name property and a start method defined using an arrow function. Arrow functions do not have their own this context, so this inside the start method refers to the global object (in this case, the window object in a browser environment).

// .bind() :
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

function introduce(language) {
  console.log(this.name + " teaches " + language);
}
const instructor = { name: "Steve" };
const introduction = introduce.bind(instructor);
introduction("JavaScript");

//output: Steve teaches JavaScript

// In this example, the introduce function takes a language parameter and logs a message using the this keyword to access the name property of the object it is bound to. The instructor object has a name property, and the bind method is used to create a new function introduction that is bound to the instructor object. When the introduction function is called with the argument 'JavaScript', it logs the message 'Steve teaches JavaScript' to the console.

// The bind method is used to explicitly set the value of this for a function, allowing it to be called in a specific context.
