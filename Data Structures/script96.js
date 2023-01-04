"use strict";

/*
    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160 (the only even number) 
*/

let integers = [2, 4, 0, 100, 4, 11, 2602, 36]

let odd = [];
let even = [];

for(let i=0; i<integers.length; i++){

    if(integers[i]%2 === 0){
        even.push(integers[i]);
    } else {
        odd.push(integers[i]);
    }
}

// console.log(`Odd numbers = ${odd}`);
// console.log(`Even numbers = ${even}`);

if(odd.length === 1){
    console.log(`The only Odd number = ${odd}`);
} else if(even.length === 1){
    console.log(`The only Even number = ${even}`);
}



//Here's what the function looks like
function findOutlier(integers){

  let odd = [];
  let even = [];

  for(let i=0; i<integers.length; i++){

      if(integers[i]%2 === 0){
          even.push(integers[i]);
      } else {
          odd.push(integers[i]);
      }
  }

  return odd.length === 1 ? odd[0] : even[0]
}

console.log(findOutlier([24463431,105217339,-55623288,-38915873,168108027,-98365411]));
console.log(findOutlier([27056643,-140090311,102999807,187317519,-148292441,33725847,-158742777,-36694625,167097217,-160124559,-77484667,-188886103,-15393483,-12334965,-195917365,-133348831,-194277754,185171409,-2261087,63415057,-21374719,25283591,131174957,-137435273,-157400947,35174021,-17445613,87709255,171698101
]));
console.log(findOutlier([47885247,161148669,163003380]));


