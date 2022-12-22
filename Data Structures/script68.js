"use strict";

/*
    How to mask your passwords leaving the last 4 digits
    "4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

    // "What was the name of your first pet?"

    "Skippy" --> "##ippy"

    "Nananananananananananananananana Batman!"
    -->
    "####################################man!"
*/


let str = "Nananananananananananananananana Batman!";
// str = "4556364607935616"
// str = "64607935616"
// str = "Skippy"
str = "1";
// str = "";

let splitStr = str.split("");
// console.log(splitStr);

let last;
let last2;
let last3;
let last4;
let final = [];




for(let i=0; i<splitStr.length; i++){

    if(splitStr.length == 1){
        console.log(splitStr[i]);
        console.log(typeof splitStr[i]);
        return splitStr[i];
    } else if(splitStr.length == 2){
        console.log(typeof "2")
        return splitStr[i];
    } else if(splitStr.length == 3){
        console.log(typeof "3")
        return splitStr[i];
    } else if(splitStr.length == 4){
        console.log(typeof "3")
        return splitStr[i];
    } else if(splitStr.length > 4){
    
        //first we store the last four digits into a new array
        for(let i=0; i<splitStr.length; i++){
            last = splitStr[splitStr.length-1];
            last2 = splitStr[splitStr.length-2];
            last3 = splitStr[splitStr.length-3];
            last4 = splitStr[splitStr.length-4];
    
            final = [...last4,...last3,...last2,...last];
        }
        console.log(`Array of last four elements [ ${final} ]`);
    
    
    
    
        //second we hash all items in the array
        const useForEach = splitStr.map(function(item,index){
            return splitStr[item] = "#";
        });
        console.log(`Array of all hashed elements [ ${useForEach} ]`);
    
    
    
    
        //third we replace all the last four elements with the stored values
        for(let i=0; i<useForEach.length; i++){
    
            for(let j=0; j<final.length; j++){
    
                useForEach[useForEach.length-1] = final[3];
                useForEach[useForEach.length-2] = final[2];
                useForEach[useForEach.length-3] = final[1];
                useForEach[useForEach.length-4] = final[0];
            }
        }
    
        console.log(useForEach.join(""));
        return useForEach.join("");
    
    } else if (splitStr.length = ""){
        return "";
    }
}














//Here's what the final function looks like
// return masked string
function maskify(cc) {
    let splitStr = cc.split("");
    // console.log(splitStr);

    let last;
    let last2;
    let last3;
    let last4;
    let final = [];


    for(let i=0; i<splitStr.length; i++){
          if(splitStr.length == 1){
          console.log(typeof "1")
          return splitStr[0];
          } else if(splitStr.length == 2){
              console.log(typeof "2")
              return splitStr[0].concat(splitStr[1]);
          } else if(splitStr.length == 3){
              console.log(typeof "3")
              return splitStr[0].concat(splitStr[1]).concat(splitStr[2]);
          } else if(splitStr.length == 4){
              console.log(typeof "3")
              return splitStr[0].concat(splitStr[1]).concat(splitStr[2]).concat(splitStr[3]);
          } else if(splitStr.length > 4){

              //first we store the last four digits into a new array
              for(let i=0; i<splitStr.length; i++){
                  last = splitStr[splitStr.length-1];
                  last2 = splitStr[splitStr.length-2];
                  last3 = splitStr[splitStr.length-3];
                  last4 = splitStr[splitStr.length-4];

                  final = [...last4,...last3,...last2,...last];
              }
              console.log(`Array of last four elements [ ${final} ]`);




              //second we hash all items in the array
              const useForEach = splitStr.map(function(item,index){
                  return splitStr[item] = "#";
              });
              console.log(`Array of all hashed elements [ ${useForEach} ]`);




              //third we replace all the last four elements with the stored values
              for(let i=0; i<useForEach.length; i++){

                  for(let j=0; j<final.length; j++){

                      useForEach[useForEach.length-1] = final[3];
                      useForEach[useForEach.length-2] = final[2];
                      useForEach[useForEach.length-3] = final[1];
                      useForEach[useForEach.length-4] = final[0];
                  }
              }

              console.log(useForEach.join(""));
              return useForEach.join("");

          } else if (splitStr.length = ""){
              return "";
        }
    }
}













//some solid examples to this question in codewars

// Example 1
function maskify(cc) {
    var maskedString = "";
    for(var i = 0; i < cc.length; i++) {
      if(i < cc.length - 4) {
        maskedString = maskedString + "#";
      } else {
        maskedString = maskedString + cc.charAt(i);
      };
    }
    return maskedString;
  }



//Example 2
function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
  }