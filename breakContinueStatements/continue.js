for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; //skip the current iteration and move to other or next iteration. Can be understood as skip.As we skip all the even numbers and print the odd numbers.
  }
  console.log(i);
}
console.log("----------------");

let k = 0;
while (k < 10) {
  k++;
  if (k % 2 === 0) {
    continue;
  }
  console.log(k);
}
console.log("----------------");

let j = 0;
do {
  j++;
  if (j % 2 === 0) {
    continue;
  }
  console.log(j);
} while (j < 10);

console.log("----------------");

//forIn - used with objects
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  if (obj[key] % 2 === 0) {
    continue;
  }
  console.log(obj[key]);
}
console.log("----------------");

//forOf - used for iterable objects(arrays and strings)
const arr = [1, 2, 3, 4, 5];
for (let ele of arr) {
  if (ele % 2 === 0) {
    continue;
  }
  console.log(ele);
}
console.log("----------------");
