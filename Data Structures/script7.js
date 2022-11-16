//Find the longest word in a String

let myWords = "The quick brown fox jumped over the lazy dog";

function longestWord(str){
    let words = str.split(" ");
    let maxLength = 0;

    for (let i=0; i<words.length; i++){
        if(words[i].length > maxLength){
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

console.log(`The Longest word in the string is ${longestWord(myWords)} words long.`);


