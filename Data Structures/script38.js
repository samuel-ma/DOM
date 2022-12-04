"use strict";

/*
    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

    The input string will only consist of lower case letters and/or spaces.
*/

let strUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
let strLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function getCount(str){
    let vowels = ["a", "e", "i", "o", "u"];

    let arrayToString = str.toString();
    // console.log(arrayToString);

    let smallCaps = arrayToString.toLowerCase();
    // console.log(smallCaps);

    let newArr = [];

    for(let i=0; i<smallCaps.length; i++){
       for(let j=0; j<vowels.length; j++){
           if(smallCaps[i] === vowels[j]){
               newArr.push(smallCaps[i]);
           }

       }
    }

    return newArr;
}

console.log(getCount(strUpper));