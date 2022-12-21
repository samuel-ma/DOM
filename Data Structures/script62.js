

"use strict";

/*
    filter_list([1,2,'a','b']) == [1,2]
    filter_list([1,'a','b',0,15]) == [1,0,15]
    filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

let l = [1,'a','b',0,15];

const newArr = l.filter((item) => Number.isInteger(item));

/*
    How I used typeof
    const newArr = l.filter((item) => {
        if(typeof item === Number){
            return item
        }
    });

    console.log(newArr)
*/

//using typeof
function filter_list(l) {
    return l.filter((item) => {return typeof item === 'number'})
  }

console.log(filter_list(l));

console.log(newArr)

