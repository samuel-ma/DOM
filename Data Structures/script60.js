

"use strict";

let n = "Dermatoglyphics";

function isIsogram(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();
  
    // Create a set to store the unique letters in the string
    let uniqueLetters = new Set();
  
    // Loop through each character in the string
    for (let char of str) {
      // If the character is not in the set, add it
      if (!uniqueLetters.has(char)) {
        uniqueLetters.add(char);
      }
      // If the character is in the set, the string is not an isogram
      else {
        return false;
      }
    }
  
    // If the loop completes, the string is an isogram
    return true;
  }


console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));