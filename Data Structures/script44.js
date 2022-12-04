"use strict";

/*
    input: 9.9999999 , 12.75 ,  0 , 3

    input/output
    1: -1
    14: -14
    -34: 34

*/
function opposite(number) {
    //your code here
    if(number > 0){
      return number*-1 ;
    } else if(number < 0){
      return number*-1 ;
    } else if(number === 0){
        return 0;
    }
}

console.log(opposite(3));