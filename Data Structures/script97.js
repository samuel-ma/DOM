"use strict";

/*
    spinWords( "Hey fellow warriors" ) 
    => returns "Hey wollef sroirraw" 

    spinWords( "This is a test") 
    => returns "This is a test" 

    spinWords( "This is another test" )
    => returns "This is rehtona test" 
*/

let str = "Hey fellow warriors";

let splitStr = str.split(" ");
let splitStr2 = [];
console.log(`The firstArr => ${splitStr}`);

for(let i=0; i<splitStr.length; i++){
    splitStr2.push(splitStr[i].split(""));
}
console.log(`The firstArr => ${splitStr.join("")}`) ;
console.log(splitStr2);

for(let j=0; j<splitStr2.length; j++){
    if(splitStr2[j].length >= 5){
        console.log(`The reversed string => ${splitStr2[j].reverse().join("")}`);
    }
}

console.log(splitStr2.join(""));
