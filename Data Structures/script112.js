

"use strict";

let str = "The brown fox jumped over the lazy dog";
str = "hello world"
str = "aaaaa"

function consonantCount(str){

    let arr = str.split(" ").join("").split("");
    console.log(`The arr = ${arr}`);
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "a"){
            arr.splice(arr[i], 1);
        } else if(arr[i] === "e"){
            arr.splice(arr[i], 1);
        } else if(arr[i] === "i"){
            arr.splice(arr[i], 1);
        } else if(arr[i] === "o"){
            arr.splice(arr[i], 1);
        } else if(arr[i] === "u"){
            arr.splice(arr[i], 1);
        }
    }

    if(arr === []){
        return 0
    } else {
        return arr.length;
    }
}

console.log(consonantCount(str));




