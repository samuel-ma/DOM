

//PROBLEM 1
//SECOND SOLUTION USING HASH TABLES(OJECTS)

const obj1 = {
    arr1: [3,1,7,9],
}

const obj2 = {
    arr2: [2,4,1,9,3]
}

console.log("SOLUTION USING HASH TABLES");

//use Object.entries to convert the object into an array
let newArr1 = Object.entries(obj1);
let newArr2 = Object.entries(obj2);
// console.log(newArr1);
// console.log(newArr2);


// store the index of the array values in a variable
let arr1 = newArr1[0][1];
let arr2 = newArr2[0][1];



function compareArrays(arrr1, arrr2){
    let finalArr = arrr2.filter(function(obj){
    return arrr1.indexOf(obj) === -1;
})
    console.log("The overlapping elements are", finalArr);
    
    //sum up the entire array
    let sum = 0;
    for(let i=0; i<finalArr.length; i++){
        sum += finalArr[i];
    }
    
    let finalSum = sum;
    // console.log(finalSum);
    return finalSum;
}

let finalSum1 = compareArrays(arr1, arr2);
let finalSum2 = compareArrays(arr2, arr1);

//calculate the finalSum
let finalAmount = finalSum1 + finalSum2;
console.log("The sum of overlapping elements is", finalAmount);