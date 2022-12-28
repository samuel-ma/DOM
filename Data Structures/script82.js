"use strict";

/*
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

let arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

for(let i=0; i<arr.length; i++){

    if(arr[i] === "needle"){
        console.log(`Found the needle at position ${i}`);
    }
}
