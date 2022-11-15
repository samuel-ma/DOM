

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
let sum = 0;
let average = 0;
let finalAverage = 0;

function averageScore(params){
    for (let i=0; i<params.length; i++){
        sum += params[i];
        average = sum / params.length;
        finalAverage = Math.ceil(average);
    }
    // console.log(sum);
    // console.log(finalAverage);
    return finalAverage;
}

let finalDol = averageScore(dolphins);
let finalKoa = averageScore(koalas);

console.log("The average score for the dolphins is", finalDol);
console.log("The average score for the koalas is", finalKoa);

//Compare the team's average scores to determine the winner
if(finalDol > finalKoa){
    console.log("")
}
