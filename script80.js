"use strict";

/**/

function DNAtoRNA(dna) {
    
    let x = dna.split("");
    let newArr = [];

    for(let i=0; i<x.length; i++){

        if(x[i] === "T"){
            newArr.push(x[i].replace(/T/gi, "U"))
        } else {
            newArr.push(x[i]);
        }
    }

    return newArr.join("");
}

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GACCGCCGCC"));