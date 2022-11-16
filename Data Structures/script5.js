

//Skipping lines using template literals in Javascript
const firstName = "Samuel";
const job = "Senior developer";
const birthYear = "1999";
const year = "2022";

const samuel = `My name is ${firstName} 
and I was born in ${year} 
and am working as a ${job}`
// console.log(samuel);




//Random practice
const dolphins = [96,108,89];
const koalas = [88,91,110];

//calculate the average score for each team using the test data below
function averageScore(params){
    let sum = 0;
    let average = 0;
    let finalAverage = 0;

    for (let i=0; i<params.length; i++){
        sum += params[i];
        average = (sum / params.length);
        finalAverage = Math.ceil(average);
    }
    console.log(sum);
    console.log(finalAverage);
    return finalAverage;
}

let finalDol = averageScore(dolphins);
let finalKoa = averageScore(koalas);

console.log("The average score for the dolphins is", finalDol);
console.log("The average score for the koalas is", finalKoa);

let winnerDol = (finalDol > finalKoa);
let winnerKoa = (finalKoa > finalDol);



//Compare the team's average scores to determine the winner
function finalWinner(x,y,a,b){
    if(x === true && a > 100){
        console.log("Team Dolphins is the winner");
    } else if (y === true && b > 100){
        console.log("Team Koalas is the winner");
    } else if (a === b && a && b >= 100){
        console.log("It's a draw");
    } else if (a && b < 100){
        console.log("Your score is less than 100");
    }
}

finalWinner(winnerDol,winnerKoa,finalDol,finalKoa);






