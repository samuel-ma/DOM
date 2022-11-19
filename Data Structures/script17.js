"use strict";

/*
    CODING CHALLENGE
    Tip 15% of the bill if the bill value is btn 50 and 300
    If the value if more, tip 20%

    1. Write a function "calcTip" that takes any bill value as input
    and returns the corresponding tip calculated
    Test the function using a bill value of 100

    2. Create an array "bills" containing the test data below

    3. Create an arrays "tips" containing the tip value for each bill
    calculated from the fuction you created

    4. BONUS: Create an array "total" containing the total values
    so the bill + tip.

    TEST DATA
    125, 555, 44
*/



// 15% tip if the bill is btn 50 and 300
// 20% tip if the bill is more than 300

let bills = [125,555,44];

function billAmount(arr){

    let totals = [];
    let tips = [];
    let total;
    let tip;

    for(let i=0; i<arr.length; i++){
        if(arr[i] >= 50 && arr[i] <= 300){
            tip = arr[i] * (15/100);
            tips.push(tip);
            total = tip + arr[i];
            totals.push(total);
            // console.log(`Your total amount is: ${total}`);
        } 
        else if(arr[i] < 50){
            total = arr[i];
            tips.push(tip);
            totals.push(total);
            // console.log(`Your total amount is: ${total}`);
        } 
        else if(arr[i] > 300){
            tip = arr[i] * (20/100);
            tips.push(tip);
            total = tip + arr[i];
            totals.push(total);
            // console.log(`Your total amount is: ${total}`);
        }
    }
    
    let finalWords = console.log(` 
    Your bills are: [ ${bills} ]
    Your tip amounts are: [ ${tips} ]
    Your total amounts are: [ ${totals} ]`);
    
    return finalWords;
}

billAmount(bills);
