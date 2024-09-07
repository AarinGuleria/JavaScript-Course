//In js we have built in date object it stores the date and time it also provides methods for data and time management . in js we commonly use it to store creation and modification times for a resource. the date ojbect can be initialized in multiple ways:


let now = new Date();
console.log(now);//2024-09-07T08:10:30.422Z

let Jan01_1970 = new Date(0);// 0 millisecond since Jan 1970
console.log(Jan01_1970);

now =new Date();
console.log(now);
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getTimezoneOffset());

//and many more