

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






//final working solution
//built using the replace function in javascript

function cc(str){
    let arr = str.split(" ").join("");
    let finalStr = arr.replace(/[aeioua^@#$&_0123456789]/gi, "")
    return (finalStr === 0 || finalStr === "") ? 0 : finalStr.length
}

console.log(cc(str));






//solution using vanilla javascript
function cc2(str) {
    let result = '';
    let array = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z',
                'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < array.length; j++){
            if (str[i] == array[j]) {
                result += str[i]
            }
        }
    }
    return result.length
}

console.log(cc("This aint going to be the last day on earth$ %am telling **you"));
console.log(cc("hello world"))



