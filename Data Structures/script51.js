

"use strict";

let arr = [1,2,3,78,5, 6,89,5];

    let arr1 = arr.sort((a,b) =>  b-a);
    console.log(arr1);
    console.log(`Highest Value = ${arr1[0]}`);

    console.log(`Lowest Value = ${arr1[arr1.length-1]}`);


    arr.reduce((a,b) => {
        if (a >b) return a; else return b;
    }, arr[0]
    ) 

    console.log(`Highest Value = ${arr[0]}`);

    let sum = 0;
    let sum2 = 0;

   arr1= arr.map((item) => {
    return sum += item
   })
   console.log(arr1);

   let arr2 = arr.reduce((a, b) => a+b , arr[0])
   console.log(arr2);

let newArr = [];

   let arr3 = arr.forEach(( item ,index , array) => {
    newArr.push(array[index] * 2)
    return  console.log(newArr);
   })

arr3
    
   

