

//Working with higher order functions
//AVOID THE DRY principle
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(3,7));


const calcAge = function(birthYear){
    return 2022 - birthYear;
}

const retireYear = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years🎁`
}

console.log(retireYear(2002, "John"));
console.log(retireYear(1999, "Samuel"));
console.log(retireYear(1991, "Matthew"));
console.log(retireYear(1997, "Peter"));


