
//how to reverse a string using splice
//first attempt
let arrr = [1,2,3,4,5,6];

let splicedArr = arrr.splice(0,1,arrr[arrr.length-1]);
let splicedArrr = Number(splicedArr)
let splicedArr2 = arrr.splice((arrr.length-1),1,splicedArrr);

console.log(splicedArrr);
console.log(splicedArr2);
console.log(arrr);


//how to reverse a string using slice
//second attempt
let myName = "Samuel Majok";

//convert the string to an array
let arr = myName.split("");
console.log(arr);

//access the last element of the array
let lastElement = arr[arr.length - 1];
console.log("The last element ==>", lastElement);

//access the first element of the array
let firstElement = arr[0];
console.log("The first element ==>", firstElement);

//move the last element to the first position of the array

    //remove the first element of the array and store it
    let slicedElement = arr.slice(0,1);
    console.log(slicedElement);

    //remove the last element of the array and store it
    let slicedElement2 = arr.slice(0,(arr.length-1));
    console.log(slicedElement2)


