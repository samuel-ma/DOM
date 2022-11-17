"use strict";

//need help with this problem
//an array of emojis
//pick some at random
let emojis = ["🎁", "👑", "🎯", "🎭", "🎀", "🍀"];

let names = ["Samuel", "John", "Peter", "Emmanuel", "Matthew", "Solomon"];

function demBoys(arrName, arrEmo){

    for(let i=0; i<arrName.length; i++){

        for(let j=0; j<arrEmo.length; j++){
            console.log(`My name is ${arrName[i]} and my favorite emoji is ${arrEmo[j]}`);
        }    
    }  
}
demBoys(names, emojis);





//random numbers between 1 and 10
let randWord = Math.random()*10;
let finalRan = Math.ceil(randWord);

function randomWordGenerator(word){
    let final = console.log(`Your random number is ${word}`);
    return final;
}
randomWordGenerator(finalRan);