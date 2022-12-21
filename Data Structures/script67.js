"use strict";

let l = [1,'a','b',0,15];

    //using "number"
    const newArr = l.map((item) => {
        if(typeof item === "number"){
            return item
        }
    });

    console.log(newArr);





    //using Number
    const newArr2 = l.filter((item) => {
        return Number(item);
    })

    console.log(newArr2);





    //using push method
    let newArr3 = [];

    for(let i=0; i<l.length; i++){
        if(typeof l[i] === Number){
            newArr.push(l[i]);
        }
    }

    console.log(newArr3);