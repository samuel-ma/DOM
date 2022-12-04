"use strict";

let str = "anyUpperCaseWord";

function solution(string) {

    let splitStr = string.split("");
    // console.log(`The split string: ${splitStr}`);
    
    let newStr = string.split("");
    // console.log(`The new string: ${newStr}`);

    let capStr = string.toUpperCase().split("");
    // console.log(`The capStr string: ${capStr}`);

    for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i] === capStr[i]) {
        newStr.splice(i, 0, ' ');
      }
    }
    return newStr.join("");
}
  
  console.log(`The camelCase solution is: ${solution('camelCasing')}`);
  console.log(`The camelCaseTest Solution is: ${solution('camelCasingTest')}`);



