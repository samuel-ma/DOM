"use strict";

//the while loop
let myName = "Samuel";
let i = 1;

while(i <= 10){
    console.log(`${myName} : ${i}`);
    i++;
}

//an example on the while loop
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    (dice === 6) ? console.log("Loop is about to end....") : "";
}




//the do while loop
do{
    console.log(`${myName} : ${i}`);
} while (i > 10){
    console.log(`${myName} : ${i}`);
}




