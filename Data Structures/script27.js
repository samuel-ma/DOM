"use strict";

let arr = [8,2,4,1,3,10,28,9];
let arr2 = [3, 5, 1, 2];
let arr3 = [3,4,5,2,1];

//Bubble Sort or Simple Sort
function bubbleSort(arr){

    //Outer pass
    for(let i = 0; i < arr.length; i++){

        //Inner pass
        for(let j = 0; j < arr.length - i; j++){

            //Value comparison using ascending order
            if(arr[j + 1] < arr[j]){
                
                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
};

console.log(`Solution using Bubble Sort`);
console.log(bubbleSort(arr3));




//Selection Sort
function selectionSort(arr) {

    //First for loop
    for (let i = 0; i < arr.length; i++) {
      let lowest = i

      //Second for loop
      for (let j = i + 1; j < arr.length; j++) {

        //first if statement
        if (arr[j] < arr[lowest]) {
            lowest = j
            }
        }

        //second if statement
        if (lowest !== i) {
            // Swap
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        }
    }
    return arr;
  }

  console.log(`Solution using Selection Sort`);
  console.log(selectionSort(arr3));

