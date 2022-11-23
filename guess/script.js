"use strict";

let again = document.querySelector(".again");
let between = document.querySelector(".between");
let number = document.querySelector(".number");
let one = document.querySelector("#one");
let input = document.querySelector(".input");
let check = document.querySelector(".check");
let guess = document.querySelector(".guess");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highScore");
let myValue = Number(input.value);



//create a random number between one and 20
function randomNumber(){
    let randomNum = Math.ceil(Math.random() * 20);
    return randomNum;
}
console.log(randomNumber());


//add a click event on the check button
check.addEventListener("click", function(){
    
    //update the score number 
    let myScore = Number(score.innerHTML);
    console.log(myScore);
    let finalScore = myScore-1;

    if(score.innerHTML <= 0){
        guess.innerHTML = "You ran out of tries...";
        score.innerHTML = 0;
    } else {
        score.innerHTML = finalScore;
    }


    //compare the random number to the input number
    if(myValue === randomNumber()){
        guess.innerHTML = "Correct Answer";
        highScore.innerHTML = finalScore;
    } else if(myValue < randomNumber()){
        guess.innerHTML = "Guess a little higher...";
    }  else if(myValue > randomNumber()){
        guess.innerHTML = "Guess a little lower...";
    }

    //make sure the number is btn 1 and 20
    if(myValue < 0){
        one.innerHTML = 0;
        guess.innerHTML = "Guess a number btn 1 and 20";
    } else if(myValue >= 1 && myValue <= 20){
        one.innerHTML = myValue;
    } else if (myValue > 20){
        one.innerHTML = 0;
        guess.innerHTML = "Guess a number btn 1 and 20";
    }


})


