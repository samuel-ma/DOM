

// Functional programming paradigms
let shoes = "Jordans";
let js = 2;
let price = 40;

function shoePrice(a, b){
    return a * b;
}

let finalAmount = shoePrice(js, price);
console.log(finalAmount);

//Object Oriented Paradigms
let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("Total price: ", calculation);
    }
}
purchase1.totalPrice();

//using the this keyword
let purchase2 = {
    shoes: 50,
    stateTax: 1.4,
    totalPrice: function(){
        let calculation = this.shoes * this.stateTax;
        console.log("Total price: " + calculation);
    }
}
purchase2.totalPrice();

