

"use strict";

let str = "The brown fox jumped over the lazy dog";
str = "hello world"
str = "aaaaa"
str = "bbbbb"
str = "h^$&^#$&^elLo world"

function consonantCount(str){

    let arr = str.split(" ").join("").split("");
    console.log(`The arr = ${arr}`);

    for(let i=0; i<arr.length; i++){
        if(arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u"){
            arr.splice(arr[i], 1);
        }
    }
    console.log(arr);

    return arr.length;
}

console.log(consonantCount(str));





