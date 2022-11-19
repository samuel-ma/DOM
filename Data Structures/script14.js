"use strict";

/*
    CODING CHALLENGE
    
    Each team competes 3 times, and then the average of the
    3 scores is calculated (so one average score per team)

    A team only wins if it has at least DOUBLE the average
    score of the other team. 
    Otherwise no team wins!

    TEST DATA ONE
    Dolphins score [44,23,71]
    Koalas score [65,54,49]

    TEST DATA TWO
    Dolphins score [85,54,41]
    Koalas score [23,34,27]

    1. Create an arrow function to calculate the average
    2. Use the function to calculate the average for both teams
    3. Create a function that takes the average and logs the winner
    4. Determine the winner for both DATA 1 and DATA 2
    5. Ignore draws
*/

//Random practice
const dolphins = [85,54,41];
const koalas = [23,34,27];


function calcAverage(params){
    let average;
    let finalAverage;
    let sum = 0;
    
    for(let i=0; i<params.length; i++){

        sum += params[i];
        average = (sum/params.length);
        finalAverage = Math.ceil(average);
    }
    return finalAverage; 
}

let winDol = (calcAverage(dolphins));
let winKoa = (calcAverage(koalas));

function checkWinnner(a,b){
    if(a > b && a >= 2* b){
        console.log(`The Dolphins win this game🏆 (${a} vs. ${b})`);
    } else if (a < b && b >= 2* a){
        console.log(`The Koalas win this game🏆 (${b} vs. ${a})`);
    } else if (a === b){
        console.log(`This game was a draw🎭 (${a} vs. ${b})`);
    } else {
        console.log(`No one wins! score⛔ (${a} vs. ${b})`);
    }
}

checkWinnner(winDol, winKoa);

// let answ = (65 + 54 + 49);
// let newAns = (answ / 3);
// console.log(newAns);