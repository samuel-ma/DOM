

//find the largest number in an array

let myArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(myArr);
let arr = [3,1,5];

// console.log(Math.max.apply(null, arr));

let newArr = [];

for(let i=0; i<myArr.length; i++){

        let finalValue = Math.max.apply(null, myArr[i]);
        newArr.push(finalValue);
}

console.log(newArr);