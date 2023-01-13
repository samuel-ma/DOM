

"use strict";

/* 
add("123", "321"); -> "444"
add("11", "99");   -> "110"
*/

let str = ["123", "321"];

let a = "123";
let b = "321";

a = "11";
b = "99";

a = "63829983432984289347293874";
b = "90938498237058927340892374089";

let final = BigInt(Number(a) + Number(b)).toString();
console.log(final);