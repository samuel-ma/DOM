

let count = 0;
let x = 3;
let y;

while(count<3){
    count++;
    y = ( 3 * count) % 3;

    switch(y){
        case 0: x = x -1;
        break;
        
        case 1: x = x + 5;
        
        default:
    }
}

console.log(y);

// second assessment

let i = 0;
let j = 0;
 
while (i<10 && j<5){
    i = i + 1;
    j = j + 1;
}

console.log(i);
console.log(j);





