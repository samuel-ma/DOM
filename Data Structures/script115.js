

"use strict";

function disemvowel(str) {
    let newStr = ""

    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    return newStr;
}

console.log(disemvowel("This website is for losers LOL!"));




//using the ES6 filter method
function dv(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(function(el) {
        return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
}

console.log(dv("The canning fox jumped over the LAZY dog!"));






//using plain javascript
function dv2(str){

	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let newStr = '';
	for (let i = 0; i <= str.length; i++) {
		let char = str.charAt(i);
		if (vowels.indexOf(char) == -1) {
			newStr += char;
		}
	}
		return newStr;
};

console.log(dv2("Saint Jeanne D'Arc just lost her son"));
