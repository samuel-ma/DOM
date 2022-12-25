"use strict";

/*
    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
*/


//first trial
function solution(str, ending){
    // TODO: complete
    let s = str.split("");
    let e = ending.split("");
    let equal;

    for(let i=0; i<s.length; i++){
        for(let j=0; i<e.length; i++){
        equal = `${s[i]} === ${e[i]}`
        }
    }

    if(equal){
        return true
    } else {
        return false
    }

}



//second trial
function solution(str, ending){

    let s = str.split("");
    let e = ending.split("");
        
    let slen = s.length;
    let me;

    for (let i = slen - 1; i >= 0; i--) {
        for(let j=e.length; j >= 0; j--){
            me = e[j];
        }
    }

    // return me;
}





//solution on Codewars
function solution(str, ending){
    return str.endsWith(ending);
}

console.log(solution("abc", "bc"));