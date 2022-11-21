"use strict";

//SOLUTION USING HASH TABLES
const obj1 = {
    arr1: [3,1,7,9]
}

const obj2 = {
    arr2: [2,4,1,9,3]
}

const joinedObj = {...obj1, ...obj2};
console.log(`Joined two objects: ${joinedObj}`);

const finalObj = {
    3: 2,
    1: 2,
    7: 1,
    9: 2,
    2: 1,
    4: 1
}

const newArr = [];

let finalArr = Object.entries(finalObj);
console.log(`Object entries: ${finalArr}`);
let keyArr = Object.keys(finalObj);
console.log(`Object keys: ${keyArr}`);
let valueArr = Object.values(finalObj);
console.log(`Object values: ${valueArr}`);

//convert the string arrays to number arrays
let numberArr = keyArr.map(Number);
console.log(`Object keys converted to number arrays: ${numberArr}`);

//sum of all the keys
let count = 0;
let finalSum;

for(let i=0; i<numberArr.length; i++){
    count += numberArr[i];
    finalSum = count;
}
console.log(`Sum of all keys: ${finalSum}`);



//find the sum of all values that are recurring
for(let i=0; i<finalArr.length; i++){
    let sum;
    let finalCount;
    let count;

    if(valueArr === 2 ){
        count = numberArr * 2;
        sum += count;
        finalCount = sum;

        console.log(sum);
        console.log(finalCount);

    } else if(valueArr == 1){
        count = numberArr;
        sum += count;
        finalCount = sum;

        console.log(finalCount);

    }
}
