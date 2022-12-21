"use strict";

/*
    Find the next square root
    121 --> 144
    625 --> 676
    114 --> -1 since 114 is not a perfect square
*/

let sq = [121, 625, 319225];

let sq2 = [144, 676, 320356];

let s = 3;

for(let i = 0; i<sq2.length; i++){
    console.log(`Square root => ${Math.sqrt(sq2[i])}`);
}

const final = Math.sqrt(s) + 1;
const finale = final * final;

if(Number.isInteger(finale)){
    console.log(finale);
  } else {
    console.log(-1);
  }



