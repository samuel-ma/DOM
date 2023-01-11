

"use strict";

/*
Write a function consonantCount, consonant_count or 
ConsonantCount that takes a string of English-language 
text and returns the number of consonants in the string.

Consonants are all letters used to write English 
excluding the vowels a, e, i, o, u.
*/

let str = "The brown fox jumped over the lazy dog";
str = '';
str = 'aaaaa';

//return the number of consonants in the string

let arr = str.split(" ").join("").split("");
// console.log(arr);
// console.log(`The arr = ${arr}`);

let vowels = ['a', 'e', 'i', 'o', 'u'];

let newArr = [];

for(let i=0; i<arr.length; i++){
    for(let j=0; j<vowels.length; j++){
        if(arr[i] === vowels[j]){
            newArr.push(arr[i]);
        }
    }
}

let sum = 0;

for(let k=0; k<vowels.length; k++){
    sum += k
}

// console.log(newArr);
// console.log(`Number of vowels = ${sum}`);

