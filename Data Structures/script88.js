"use strict";

const restaurant = {
    name: "Classico Italian",
    location: "Via Angelo Tavanti 23, Firenz, Italy",
    categories: ["Italian", "Bruschetta", "Garlic", "Bread", "Salads"],
    startMenu: ["Focaccia", "Pizza", "Veg", "Organic"],
    mainMenu: ["Burgers", "Pasta", "Risotto"],

    order: function(sIndex, mIndex){
        return [this.startMenu[sIndex]], [this.mainMenu[mIndex]];
    },
    
    orderDelivery: function ({sIndex = 1, mIndex = 0, time, address = "San Paulo"}){
        console.log(`
        Order received! ${this.starterMenu[sIndex]} and ${this.mainMenu[mIndex]} will be delivered to ${address} at ${time}
        `);
    },
    
    openingHours: {
        thurs: {
            open: 125,
            close: 22,
        },

        Fri: {
            open: 11,
            close: 24,
        },
        
        Sat: {
            open: 0,
            close: 30,
        },
    },
};

restaurant.orderDelivery({
    time: "22:30",
    address: "Via del sole, 24",
    mIndex: 2,
    sIndex: 2,
});

const arr = [1,3,5,6];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

//array destructuring
const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

const [fast, ,third] = restaurant.categories;
console.log(fast,third);

for(let i=0; i<restaurant.categories.length; i++){
    console.log(restaurant.categories[i]);
    var [first,,,, last] = restaurant.categories;
}
console.log(first,last);

//swapping variable values using array destructuring
let [main, secondary] = restaurant.categories;

[secondary, main] = [main, secondary];
console.log(main, secondary);

const [start] = restaurant.order(2,0);
console.group(start);

//Nested destructuring
const nested = [2,3,5, [0,7,9]];
const [h,,,[j]] = nested;
console.log(h,j);

//Default values
const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);


//Object destructuring
const {name, openingHours, categories} = restaurant;

//rename your variables
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;

console.log(`
            ${restaurantName}
            ${hours}
            ${tags}`);

//default values in object destructuring
const {mainMenu: menu = [], startMenu: starters = []} = restaurant;

console.log(menu, starters);

//mutuating variables in object destructuring
let a1 = 111;
let b1 = 887;
const obj = {a1: 23, b1: 999, c1: 40};

({a1,b1} = obj);
console.log(a1,b1)

