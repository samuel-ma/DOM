// "use strict";

// //Array destructuring ES6
// const animals = ["horse", "cat", "sabertooth", undefined, "linx"];

// const [horse, cat, sabertooth="lion", ...rest] = animals;

// console.log(horse);
// console.log(cat);
// console.log(sabertooth);
// console.log(rest);
// console.log(animals);



// const arr = ["🍀", "🍕", "🍔","🌭",undefined];

// const [ glover, pizza,,hotdog,eggs = "🥚"] = arr;

// console.log(glover);
// console.log(pizza);
// console.log(eggs)


// let person = { name : "John", lastName:"Doe",age:28}

// let {name} = person

// console.log(name);



// //using the spread operator on objects

// const obj1 = {
//     name: "mario",
//     age: 20,
//     occupation: "student",
//     married: false,
// }

// const obj2 = {
//     name: "shey",
//     age: 9,
//     occupation: "pupil",
//     married: false,
// }

// const joinedObj = {...obj1, ...obj2};

// console.log(joinedObj);




let student1 = {name:"John"}
let student2 = {name:"Mary"}
let newObject = {
 ...student1,
 ...student2,
}

console.log(newObject);