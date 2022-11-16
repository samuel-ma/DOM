

/*CONFIRM THE ENDING
    Check if a string(first argument, str) ends with the 
    given target string(second argument, target)
    This challenge can be solved with the .endsWith() method
    which was introduced in ES2015 
    But for the purpose of this challenge, we would like you 
    to use one of the JavaScript substring methods instead.
*/


function confirmEnding(str, target) {
    let sliceStr = str.slice(str.length - target.length); 
    let finalStr = '';
    
    if(sliceStr === target){
        finalStr = true;
    } else {
        finalStr = false;
    }
    
   return finalStr;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulations", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "thing"));
console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("You should have been buit in like everyone else", "elsa"));

