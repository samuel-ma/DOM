

"use strict";

/*
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

let str =  " Hello there thanks for trying my Kata";

let splitStr = str.split(" ").join("");
console.log(splitStr);

console.log(`#${splitStr}`);

return (str === "") ? false : `#${splitStr}`;