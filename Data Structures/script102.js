

"use strict";

/*
One of the simplest and most widely known ciphers is a 
Caesar cipher, also known as a shift cipher. In a shift
cipher the meanings of the letters are shifted by some 
set amount.

A common modern use is the ROT13 cipher, where the 
values of the letters are shifted by 13 places. 
Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as 
input and returns a decoded string.

All letters will be uppercase. Do not transform any 
non-alphabetic character (i.e. spaces, punctuation), 
but do pass them on.
*/

let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let word = "SERR PBQR PNZC";

let allWords = alphabets.split("");
console.log(`allWords => ${allWords}`);

let str = word.split(" ").join("").split("");
console.log(`str => ${str}`);

let newArr = [];

for(let i=0; i<allWords.length; i++){
    for(let j=0; j<str.length; j++){
        
        if(allWords[i] === str[j] && str[j] === "A"){
            newArr.push("N");
        } else if(allWords[i] === str[j] && str[j] === "B"){
            newArr.push("O");
        } else if(allWords[i] === str[j] && str[j] === "C"){
            newArr.push("P");
        } else if(allWords[i] === str[j] && str[j] === "D"){
            newArr.push("Q");
        } else if(allWords[i] === str[j] && str[j] === "E"){
            newArr.push("R");
        } else if(allWords[i] === str[j] && str[j] === "F"){
            newArr.push("S");
        } else if(allWords[i] === str[j] && str[j] === "G"){
            newArr.push("T");
        } else if(allWords[i] === str[j] && str[j] === "H"){
            newArr.push("U");
        } else if(allWords[i] === str[j] && str[j] === "I"){
            newArr.push("V");
        } else if(allWords[i] === str[j] && str[j] === "J"){
            newArr.push("W");
        } else if(allWords[i] === str[j] && str[j] === "K"){
            newArr.push("X");
        } else if(allWords[i] === str[j] && str[j] === "L"){
            newArr.push("Y");
        } else if(allWords[i] === str[j] && str[j] === "M"){
            newArr.push("Z");
        } else if(allWords[i] === str[j] && str[j] === "N"){
            newArr.push("A");
        } else if(allWords[i] === str[j] && str[j] === "N"){
            newArr.push("A");
        } else if(allWords[i] === str[j] && str[j] === "O"){
            newArr.push("B");
        } else if(allWords[i] === str[j] && str[j] === "P"){
            newArr.push("C");
        } else if(allWords[i] === str[j] && str[j] === "Q"){
            newArr.push("D");
        } else if(allWords[i] === str[j] && str[j] === "R"){
            newArr.push("E");
        } else if(allWords[i] === str[j] && str[j] === "S"){
            newArr.push("F");
        } else if(allWords[i] === str[j] && str[j] === "T"){
            newArr.push("G");
        } else if(allWords[i] === str[j] && str[j] === "U"){
            newArr.push("H");
        } else if(allWords[i] === str[j] && str[j] === "V"){
            newArr.push("I");
        } else if(allWords[i] === str[j] && str[j] === "W"){
            newArr.push("J");
        } else if(allWords[i] === str[j] && str[j] === "X"){
            newArr.push("K");
        } else if(allWords[i] === str[j] && str[j] === "Y"){
            newArr.push("L");
        } else if(allWords[i] === str[j] && str[j] === "Z"){
            newArr.push("M");
        }
    }
}

console.log(`newArr => ${newArr}`);


