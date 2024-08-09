let a = { value: 10 };
let b = a;

b.value = 20;
console.log(a); //20
console.log(b); //20

console.log("-----------------------");
//Method1 for cloning
let c = { value: 10 };
let d = {};

Object.assign(d, c);

d.value = 20;
console.log(c);
console.log(d);

console.log("-----------------------");
//Method2 for cloning
let e = { value: 10 };
let f = { ...e };

f.value = 20;

console.log(e);
console.log(f);
console.log("-----------------------");
