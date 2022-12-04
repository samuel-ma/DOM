"use strict";

//array of products
const products = [
    { name: 'Milk', price: 15 },
    { name: 'Water', price: 9 },
    { name: 'Bread', price: 5 },
    { name: 'Bread', price: 0 },
    { name: 'Bread', price: -8 }
]

//solution using Javascript
function addTwo(arr){

    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i].price) === "number"){
            arr[i].price = arr[i].price + 2;
        }
    }
    return arr;
}
console.log(addTwo(products));


const products2 = [
    { name: 'Milk', price: 15 },
    { name: 'Water', price: 9 },
    { name: 'Bread', price: 5 },
    { name: 'Bread', price: 0 },
    { name: 'Bread', price: -8 }
]


//solution using ES6
const changeProducts = () =>
products2.map(product => ({ ...product, price: product.price + 2 }));
console.log(changeProducts());