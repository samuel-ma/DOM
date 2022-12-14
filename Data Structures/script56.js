

"use strict";

/*
    Input - Output

    "ATTGC" --> "TAACG"
    "GTAT" --> "CATA
*/

let myStr = "GTAT";
let splitStr = myStr.split("");

function repMe(str){

    for(let i=0; i<splitStr.length; i++){
        if(str[i] === "A"){
            str[i] = "T";
        } else if(str[i] === "T"){
            str[i] = "A"
        } else if(str[i] === "G"){
            str[i] = "C"
        } else if(str[i] === "C"){
            str[i] = "G"
        }
    }

    let finalStr = str.join("");
    return finalStr;
}

console.log(repMe(splitStr));


//using regex to and the replace method in javascript
let myName = "sass";

let repN = myName.replace('/s/', "m");
// console.log(repN);s