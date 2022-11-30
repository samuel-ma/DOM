"use strict";




//Array of objects
let arr = [
    {
        name: "Milk",
        price: 2,
    },
    { 
        name: "Cheese",
        price: 3
    },
    { 
        name: "Bread", 
        price: 4 
    },
    { 
        name: "Chicken", 
        price: 10 
    },
    { 
        name: "Pineapple", 
        price: 60 
    },
    { 
        name: "Muffin", 
        price: 70 
    },
];






/* 
 1.loop array to catch each obj separately
 2.Check whether the value is a number
 
 */
//find prices above 50
const obj = Object.values(arr);
console.log(obj);

let newArr = [];

for (let i = 0; i < obj.length; i++) {
  if (obj[i].price <= 10) {
    newArr.push(obj[i]);
  }
  console.log((obj[i]));
}
console.log(`--------------------------------------------`)
console.log(`The newArr: ${newArr}`);
console.log(`--------------------------------------------`)








//solution using ES6 forEach
let finalArr = [];

const filterProducts = () => {

    arr.filter(function(product){
        if(product.price < 10){
            finalArr.push(product);
        }
        return finalArr;
    })
}
console.log(finalArr);
console.log(`The finalArr: ${finalArr}`);



