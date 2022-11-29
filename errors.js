

//Error prevention in javascript
function addTwoNums(a,b){
    try{
        if(typeof(a || b != number)){
            throw new ReferenceError("the first argument is not a number");
        } else {
            console.log(a + b);
        }
    } catch(err){
        console.log("Error!", err);
    }
}

addTwoNums(5, "5");
console.log("It still works");

//Defensive programming
//Defensive programming is all about assuming that all the arguments 
//a function will receive are of the wrong typeof, the wrong value or both 

function letterFinder(word, match) {

    let condition1 = typeof(word) == "string" && word.length >=2;

    let condition2 = typeof(match) == "string" && match.length == 1;

    if (condition1 && condition2 === true){
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

//as a failing test
letterFinder(3, 8);

//as a passing test
letterFinder("cat", "c");




