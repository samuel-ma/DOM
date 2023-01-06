"use strict";

/*
    spinWords( "Hey fellow warriors" ) 
    => returns "Hey wollef sroirraw" 

    spinWords( "This is a test") 
    => returns "This is a test" 

    spinWords( "This is another test" )
    => returns "This is rehtona test" 
*/

let str = "Hey fellow warriors";
let arr = str.split(" ");
console.log(`The first arr = ${arr}`);

let arr2 = []

for(let i=0; i<arr.length; i++){
    // console.log(arr[i]);

    if(arr[i].length <= 5){
        arr2.push(arr[i]);
    }
    
    if(arr[i].length >= 5){
        arr2.push(arr[i].split("").reverse("").join(""));
    }
}

console.log(`The secondArr = ${arr2.join(" ")}`);
console.log(`-------------------------------`);



//final function 
function spinWords(str){
    let arr = str.split(" ");
    let arr2 = []
  
    for(let i=0; i<arr.length; i++){
        (arr[i].length < 5) ? arr2.push(arr[i]) : (arr[i].length >= 5) ? arr2.push(arr[i].split("").reverse("").join("")) : ""
    }
    
    return `${arr2.join(" ")}`;
}

console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))
console.log(spinWords("Seriously this is the last one"))
console.log(spinWords("Just kidding there is still one more"))
console.log(spinWords("I love you so much please don't leave me"))







//more function with different approaches
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}


function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}


function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}


function spinWords(str){
    return str.split(' ').map(spinSingleWord).join(' ');
  }
  
function spinSingleWord(word){
    return word.length>4 ? word.split('').reverse().join('') : word;
}


function spinWords(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].length >= 5)
        strArr[i] = strArr[i].split('').reverse().join('');
    }
    return strArr.join(' ');
}


function spinWords(str){
    wordsArray = str.split(' ');
    wordsArray.forEach(function(word, index){
      if (word.length > 4) {
        wordsArray[index] = word.split('').reverse().join('');
      }
    });
    return wordsArray.join(' ');
  }
