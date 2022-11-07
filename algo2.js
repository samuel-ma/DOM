

//Write an algorithm that reads a sentence which ends with a point,
// character by character and determine:

// 1 . The length of the sentence (number of characters)

// 2. The number of words in the sentence (assuming that the words are separated by a single space).

// 3. The number of vowels in the sentence

// You have to keep in mind that 
// ---> Each character will be treated separately
// ---> The last character is the point
// ---> Use three variables as counters 

let sentence = "Hey there, my name is so and so from Los Santos.";
let vowels = "aeiou";
let sum = 0;

//length of the sentence
console.log(sentence.length);

//number of words in the sentence
console.log(sentence.split(" "));

//get rid of the spaces in that sentence
console.log(sentence.split(" ").join());

//number of vowels in the sentence
for(let i = 0; i < sentence.length; i++){
    console.log(sentence[i]);
}
