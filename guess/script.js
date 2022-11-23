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




    //create a random number between one and 20
    function randomNumber(){
        let randomNum = Math.ceil(Math.random() * 20);
        return randomNum;
    }
    console.log(randomNumber());



//add a click event on the check button
check.addEventListener("click", function(){
    let myValue = Number(input.value);



    //store the input in a value
    if(myValue === randomNumber()){
        guess.innerHTML = "Correct Number";
        score.innerHTML = randomNumber();
        myNumber.innerHTML = randomNumber();
        // console.log(`You guessed the correct number`);
    } else if (myValue < randomNumber()){
        guess.innerHTML = "Guess a little higher";
        score.innerHTML = randomNumber();
        myNumber.innerHTML = randomNumber();
        // console.log(`Guess a little higher`);
    } else if (myValue > randomNumber()){
        guess.innerHTML = "Guess a little lower";
        score.innerHTML = randomNumber();
        myNumber.innerHTML = randomNumber();
        // console.log(`Guess a little lower`);
    } else {
        guess.innerHTML = "Start guessing...";
    }



    //update the number
    if(myValue){
        number.innerHTML = myValue;
        // console.log(number);
    } else {
        number.innerHTML = "?";
        // console.log(number);
    }



    //store the highest score
    if(myValue > score.innerHTML){
        highScore.innerHTML = myValue;
        // console.log(score);
    } else if (myValue === score.innerHTML){
        highScore.innerHTML = myValue;
        // console.log(score);
    }

})


