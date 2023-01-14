

"use strict";

/*
SETS 
A set is basically a collection of unique values
*/

const mySet = new Set(["Pasta", "Pizza", "Pizza", "Rizotto", "Pasta", "Pizza"]);
console.log(mySet);

let str = new Set("Jonas");
console.log(str);

let mySize = str.size;
console.log(mySize);

let x = mySet.has("Bread");
console.log(x);

let y = mySet.add("Garlic Bread");
y.add("Munchos");
console.log(y);

mySet.delete("Garlic Bread");
console.log(mySet);

// mySet.clear();
// console.log(mySet);

console.log(`-------------------------`)

for(const all of mySet){
    console.log(all);
}

console.log(`-------------------------`)

const staff = ["Master", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

let myStaff = new Set(staff);
console.log(myStaff);

console.log(`-------------------------`)

let myArr = [...myStaff];
console.log(myArr);
console.log(myArr.length);





