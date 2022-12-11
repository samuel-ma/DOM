

"use strict";

let str = "2 1 3 6 4 5";
let str2 = "1 2 -3 4 5";
let str3 = "1 9 3 4 -5";

// solution outside a function
// sort solution
let splitStr = str.split(" ");
    console.log(`The split string = [${splitStr}]`);
    let newArr = [];
    
    for(let i=0; i<splitStr.length; i++){
        newArr.push(parseInt(splitStr[i]));
    }
    console.log(`The newArr = [${newArr}]`);

    let arr1 = newArr.sort((a,b) => {
        return  a-b;
    });

    console.log(`The arr1 = [${arr1}]`);

    console.log(`The High Value is ${arr1[0]}`);
    console.log(`The Loq Value is ${arr1[arr1.length-1]}`);


function highAndLow(arr){
    let splitStr = arr.split(" ");
    console.log(`The split string = [${splitStr}]`);
    let newArr = [];
    
    for(let i=0; i<splitStr.length; i++){
        newArr.push(parseInt(splitStr[i]));
    }
    console.log(`The newArr = [${newArr}]`);

    let arr1 = newArr.sort((a,b) => {
        return  b-a;
    });

    console.log(`The arr1 = [${arr1}]`);

    console.log(`The High Value is ${arr1[0]}`);
    console.log(`The Low Value is ${arr1[arr1.length-1]}`);

    let final = 'arr1[0] arr1[arr1.length-1]';

    return final;
}

highAndLow(str);
highAndLow(str2);
highAndLow(str3);






// solution using sort
function highAndLow(str){
    let splitStr = str.split(" ");
    let newArr = [];
    
    for(let i=0; i<splitStr.length; i++){
        newArr.push(parseInt(splitStr[i]));
    }

    let sortArr = newArr.sort((a,b) => {
        return  b-a;
    });

    return (`${sortArr[0]} ${sortArr[sortArr.length-1]}`);
}

console.log(highAndLow(str));
console.log(highAndLow(str2));
console.log(highAndLow(str3));





//solution using Math.max and Math.min
function highAndLow(str){
    let splitStr = str.split(" ");
    let newArr = [];
    
    for(let i=0; i<splitStr.length; i++){
        newArr.push(parseInt(splitStr[i]));
    }

    return `'${Math.max(...newArr)} ${Math.min(...newArr)}'`;
}

console.log(highAndLow(str));
console.log(highAndLow(str2));
console.log(highAndLow(str3));