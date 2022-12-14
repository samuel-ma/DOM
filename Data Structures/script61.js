

"use strict";

//
let n = "Dermatoglyphics";
// let str = n.split("");

function isIsogram(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();
  
    // Create an object to store the characters we've seen so far
    var seenChars = {};
  
    // Use a for loop to iterate over the characters in the string
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
  
      // If we've already seen this character, return false
      if (seenChars[char]) {
        return false;
      }
  
      // Otherwise, mark this character as seen and continue
      seenChars[char] = true;
    }
  
    // If we get through the loop and haven't returned false, the string must be an isogram
    return true;
  }

console.log(isIsogram(n));