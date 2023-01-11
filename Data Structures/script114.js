

"use strict";

/*
    DISEMVOWEL TROLLS
    Your task is to write a function that takes a string 
    and return a new string with all vowels removed.
*/

let str = "This website is for losers LOL!";
str.toLowerCase();

let arr = str.split(" ").join("").split("");
console.log(`The arr = ${arr}`);

let vowels = ["A", "E", "I", "O", "U"];
console.log(`The vowels = ${vowels}`);

for(let i=0; i<arr.length; i++){
    for(let j=0; j<vowels.length; j++){
        if(i === j){
            arr.splice(i, 1);
        }
    }
}

console.log(`The newArr = ${arr}`);








