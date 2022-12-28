"use strict";

/*
    5, 2, "add"      --> 7
    5, 2, "subtract" --> 3
    5, 2, "multiply" --> 10
    5, 2, "divide"   --> 2.5 
*/

function operators(a,b,string){

    if(string === "add"){
        return a + b;
    } else if(string === "subtract"){
        return a - b;
    } else if(string === "multiply"){
        return a * b;
    } else if(string === "divide"){
        return a / b;
    }
}

console.log(operators(5,3,"add"));
console.log(operators(5,3,"subtract"));
console.log(operators(5,3,"multiply"));
console.log(operators(5,3,"divide"));
console.log(operators(6,1,"add"));