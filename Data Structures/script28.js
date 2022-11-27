"use strict";

let arr = [3, 0, 2, 5, -1, 4, 1];

//insertion sort
function arrSort(params) {

    for (let i = 1; i < params.length; i++) {
      let j = i - 1
      let temp = params[i]

      while (j >= 0 && params[j] > temp) {
        params[j + 1] = params[j]
        j--
      }
      params[j+1] = temp
    }
    return params
  }
  console.log(arrSort(arr));