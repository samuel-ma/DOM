"use strict";


// function factorialize(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return num;
//   }
//   factorialize(5);




  function factorialize(num) {
    var sum = 1;
    for (var i = 1; i <= num; i++){
      sum = sum*i;
    }
    return sum;
  }
  
  console.log(factorialize(5));