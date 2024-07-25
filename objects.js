let course = {
    name: 'Javascript for beginners',
    hours: 3
};
console.log(course);


//acessing the properties using two ways:
//first using dot(.) notaton -
console.log(course.name);
console.log(course.hours);

//reassign a property
course.name = 'Javascript';
console.log(course.name);


//second using square brackets-
console.log(course['name']);

//reassign a property
course['name'] = 'javascript fundamentals';
console.log(course['name']);


//Note:
/*
    Dot notation is more commonly used however we use square brackets when we want to access a property dynamically, when we dont know which target property we wanna access until run time.
*/
//example:

let property = 'hours';
console.log(course[property]);

