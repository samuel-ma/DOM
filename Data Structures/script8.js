

//find the largest number in an array
function largestOfFour(arr) {
  let newArr = [];

  for(let i=0; i<arr.length; i++){
    let largestNum = Math.max.apply(null, arr[i]);
    newArr.push(largestNum);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
