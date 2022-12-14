

"use strict";

let num = 123456789;

//descending order
function descendingOrder(n){
  
    let finalNum = n.toString().split("").sort(function(a,b){return b-a}).toNumber().join("");
  
    if(n <= 0){
      return 0;
    } else {
      return finalNum;
    }
}

console.log(descendingOrder(num));