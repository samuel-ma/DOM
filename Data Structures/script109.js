

"use strict";

let str = "The brown fox jumped over the lazy dog";

// let arrStr = str.split(" ");
// console.log(`The newArr = ${arrStr}`);

// let obj = {...arrStr};
// console.log(obj);











str = "";
str = "aaaaa";

function consonantCount(str) {
    let arr = str.split(" ").join("").split("");
  
    let vowels = ['a', 'e', 'i', 'o', 'u'];
  
    let newArr = [];
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(arr[i] === vowels[j]){
                newArr.push(arr[i]);
            }
        }
    }

    console.log(`The newArr = ${newArr}`);
    
    if(newArr === []){
      return 0
    } else {
      return newArr.length;
    }
}

console.log(consonantCount(str));












