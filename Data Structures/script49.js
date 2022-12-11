

"use strict";

//
let myStr = "Samuel Ma";
let arrStr = myStr.split("");
// console.log(arrStr);

const removeVowels = (str) => {
    
    let vowels = ["a", "e", "i", "o", "u" ];
    let finalStr;
    let index;
    
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowels.length; j++){

            index = str.indexOf(str[i]);

            if(str[i] === vowels[j]){
                if(index > -1){
                    finalStr = str.splice(index, 1);
                }
            }
        }
    }

    return finalStr;
}

// console.log(removeVowels(myStr));




//how to remove an index from an array
const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array);