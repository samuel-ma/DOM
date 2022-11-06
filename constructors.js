

// Constructors
// These are special functions used to build instances of built-in native objects

function IceCream(flavor){
    this.flavor = flavor;
    this.meltIt = function(){
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let VanillaIceCream = new IceCream("vanilla");
let MangoIceCream = new IceCream("mango");
let AppleIceCream = new IceCream("apple");

VanillaIceCream;
MangoIceCream;
AppleIceCream;