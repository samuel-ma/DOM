"use strict";

/*
    CODING CHALLENGE 
    Build a very simple tip calculator
    If the bill is between 50 and 300, tip 15%
    If the bill is higher than 300, tip 20  

    1. Calculate the tip depending on the tip value
    2. It's not allowed to use an if/else statement
    3. Use ternary operator for a bonus point
    4. Print a string to the console containing the bill value
    5. Test for bill values
       -> 275
       -> 40
       -> 430
*/

let bill = 300;
let tip;
let total;

if(bill < 50){
    total = bill;
    console.log("Your total value is:", total);
} 
else if(bill >= 50 && bill <= 300){
    tip = bill * (15/100);
    total = bill + tip;
    console.log("Your tip is:", tip, "and your total value is:", total);
} 
else if(bill > 300){
    tip = bill * (20/100);
    total = bill + tip;
    console.log("Your tip is:", tip, "and your total value is:", total);
}

const private = 'sam';
console.log(private)

