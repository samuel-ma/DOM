"use strict";

/*
    []                                -->  "no one likes this"
    ["Peter"]                         -->  "Peter likes this"
    ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

let arr = ["Alex", "Jacob", "Mark", "Max"];

console.log(arr.length);

let sum;

for(let i=0; i<arr.length; i++){

    if(arr.length === 0){
        sum = `no one likes this`;
    } else if(arr.length === 1){
        sum = `${arr[0]} like this`;
    } else if (arr.length === 2){
        sum = `${arr[0]} and ${arr[1]} like this`;
    } else if(arr.length > 2){
        sum = `${arr[0]}, ${arr[1]} and ${arr.length-2} others like this`;
    }
}

console.log(sum)


function likes(names) {
    if(names.length === 0) return "no one likes this";
    if(names.length === 1) return names[0] + " likes this";
    if(names.length === 2) return names[0] + " and " + names[1] + " like this";
    if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}

console.log(likes(arr));