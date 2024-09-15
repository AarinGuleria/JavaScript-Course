//global scope: here name is global

const name = 'Steve';
console.log(name);

//local scope: here name is local
function displayName() {
    const name = 'John';
    console.log(name);
}
displayName();
console.log(name);

//output: Steve
//        John
//        Steve

