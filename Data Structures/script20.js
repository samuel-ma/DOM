"use strict";

//Loops
let myName = "Samuel";
let myAge = 22;
let myObj = {
    firstName: "John",
    color: "red",
    dog: "German Shepard"
}
let myBool = false;
let myArr = [1,2,3,4,5];
let myFunc = function(){
    console.log(`${myName} is in love with coding man`);
}

for(let i=1; i<=10; ++i){
    console.log(`My name is ${myName}:${i}`);
}

//break and continue
console.log(myName.indexOf());
let mmName = typeof(myName);
console.log(mmName);

//using the typeof function to find the type of values
console.log(typeof(myAge));
console.log(typeof(myBool));
console.log(typeof(myObj));
console.log(typeof(myArr));
console.log(typeof(myFunc));



//looping an array forwards
let sum = 1;
let final;

for(let i=0; i<myArr.length; i++){
    sum *= myArr[i];
    final = sum;
}
console.log(final);

//looping an array backwards
for (let i = myArr.length-1; i >=0; i--){
    console.log(myArr[i]);
}
