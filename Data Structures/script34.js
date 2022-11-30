"use strict";

const people = [
    { name: 'Max' },
    { name: 'Jack' },
    { name: 'Marry' }
]

// JavaScript
function showEachOne(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].name)
    }
}
showEachOne(people);
console.log(`-------------------------------`);

   
// ES6 
const esForEach = people.forEach((item) => console.log(item.name));

console.log(`-------------------------------`);

//some ES6 and JavaScript
let myName = people.forEach(function(item){
    return console.log(item.name);
})