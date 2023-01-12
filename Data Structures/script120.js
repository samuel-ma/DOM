

"use strict";

let a = [17,28,30];
let b = [99,16,8];

function compareTriplets(a, b) {
    let iW = [];
    let jW = [];
    let newArr = [];
    
    for(let i=0; i<a.length; i++){
        for(let j=0; j<b.length; j++){
            if(i[0] > j[0]){
                iW.push(i[0]);
            } else if(i[1] > j[1]){
                iW.push(i[1]);
            } else if(i[2] > j[2]){
                iW.push(i[2]);
            } 
            
            
            else if(j[0] > i[0]){
                jW.push(j[0]);
            } else if(j[1] > i[1]){
                jW.push(j[1]);
            } else if(j[2] > i[2]){
                jW.push(j[2]);
            }  
        }
    }

    return newArr[iW.length, jW.length];
}

console.log(compareTriplets[a,b]);