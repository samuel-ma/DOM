

"use strict";

const ourArray = [1, 4, 0, 9, -3];
  let sum = 0;

  for (let i = 0; i < ourArray.length; i += 1) {
    sum += ourArray[i];
}

console.log(sum);

const strArr = ["a","a","a","a","a","a","a","a","a",];

const redArr = strArr.reduce((a,b) => {
    return a + b;
});

console.log(`Sum of arr = ${redArr}`);








