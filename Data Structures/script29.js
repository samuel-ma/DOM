"use strict";

let arr = [8,2,4,1,3];

function bubbleSort(params){
    
    for(let i=0; i<params.length; i++){
        for(let j=0; j<params.length-1; j++){
            if(params[j+1] < params[j]){
                //swap the numbers
                [params[j+1], params[j]] = [params[j], params[j+1]];
            }
        }
    }

    return params;
}

console.log(`BUBBLE SORT`)
console.log(`Unsorted Array = [${arr}]`);
console.log(`Sorted Array = [${bubbleSort(arr)}]`);





console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);






const arr2 = [7,9,3,15,10,0]

function selectionSort(params){
    for(let i=0; i<params.length; i++){
        let indexMin = i;
        
        for(let j=i+1; j<params.length; j++){
            
            if(params[j] < params[indexMin]){
                indexMin = j;
            }
            if(indexMin !== i){
                //swap
                const temp = params[indexMin];
                params[indexMin] = params[i];
                params[i] = temp;

            }
        }
    }
    return params;
}

console.log(`SELECTION SORT`)
console.log(`Unsorted Array = [${arr2}]`);
console.log(`Sorted Arrays = [${selectionSort(arr2)}]`)







console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);
console.log(`            ||                 `);






const arr3 = [-6,20,8,-2,4,6,8,9];

function mergesort(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergesort(leftArr), mergesort(rightArr))
  }
  
  function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr
  }
  
  console.log(`MERGESORT`);
  console.log(`The unsorted Array = [${arr3}]`);
  console.log(`The sorted Array = [${mergesort(arr3)}]`);










  console.log(`            ||                 `);
  console.log(`            ||                 `);
  console.log(`            ||                 `);
  console.log(`            ||                 `);
  console.log(`            ||                 `);
  console.log(`            ||                 `);
  console.log(`            ||                 `);
  console.log(`            ||                 `);
  console.log(`            ||                 `);
  console.log(`            ||                 `);
  
  
  
  
  
  
const arr4 = [-6,20,8,-2,4,6,8];

function quickSort(params){

    let indx = params.length-1;
    let pivot = params[indx];
    // console.log(`The last element in the array is ${pivot}`);

    if(params.length < 2){
        return params;
    }

    //we create two arrays
    let leftArr = [];
    let rightArr = [];

    for(let i=0; i<params.length; i++){
        if(params[i] < pivot){
            leftArr.push(params[i]);
        } else  {
            rightArr.push(params[i])++;
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(`The unsorted Array = [${arr4}]`);
console.log(`The sorted Array = [${quickSort(arr4)}]`);

