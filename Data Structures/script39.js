"use strict";

/*
    input: abracadabra
    Oput: [a, a, a, a, a] = 5
*/

let myStr = "abracadAbra";

function getCount(str){
    let strLower = str.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    let count;
    let newArr = [];

    for(let i=0; i<strLower.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(strLower[i] == vowels[j]){
                newArr.push(str[i]);
            }
        }
    }

    count = newArr.length;

    return count;
}

console.log(getCount(myStr));