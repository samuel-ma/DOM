

"use strict";

let str = "The brown fox jumped over the lazy dog";
str = "hello world"
str = "aaaaa"

function consonantCount(str){

    let arr = str.split(" ").join("").split("");
    console.log(`The arr = ${arr}`);
    
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(i === j){
                arr.splice(i, 1);
            }
        }
    }

    if(arr === []){
        return 0
    } else {
        return arr.length;
    }
}

console.log(consonantCount(str));










