for(let i=0; i<10;i++){
    if(i===5){
        break;
    }
    console.log(i);
}

console.log('----------------');

let j=0;
while(j<10){
    if(j===5){
        break;
    }
    console.log(j);
    j++;
}

console.log('----------------');

let k=0;
do{
    if(k===5){
        break;
    }
    console.log(k);
    k++;}while(k<10);

    console.log('----------------');

//forIn - used with objects
const obj = { a:1, b:2, c:3};
for(let key in obj){
    if(key === 'b'){
        break;
    }
    console.log(obj[key]);
    console.log(obj);
}

console.log('----------------');

//forOf - used for iterable objects(arrays and strings)
const arr =[1, 2, 3, 4, 5];
for(let ele of arr){
    if(ele === 3){
        break;
    }
    console.log(ele);
}