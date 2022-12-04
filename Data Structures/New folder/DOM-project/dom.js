
let heart = document.getElementById("heart");
heart.addEventListener('click', function(){
    heart.style.color= 'red'
})

let heart1 = document.getElementById("heart1");
heart1.addEventListener('click', function(){
    heart1.style.color= 'red'
})

let heart2 = document.getElementById("heart2");
heart2.addEventListener('click', function(){
    heart2.style.color= 'red'
})





function totalClick(click){
    const totalClicks = document.getElementById("totalClicks")
    
 
    

const sumValue = parseInt(totalClicks.innerText) + click
totalClicks.innerText = sumValue



if (sumValue < 0){
    totalClicks.innerText = 0
}
if (click === 0){
    totalClicks.innerText = 0
}

const pretotal = document.getElementById('pre1').innerText 
// let subTotal = subtotalDOM.innerText

let totalPrice=0;
totalPrice += (parseInt(totalClicks.innerText))* 20;
document.getElementById('pre1').innerText  = totalPrice

let finalprice = 0
let pre3 = Number(document.getElementById('pre3').innerText)
let pre2= Number(document.getElementById('pre2').innerText)
let pre1= Number(document.getElementById('pre1').innerText)
finalprice += pre1 + pre2 + pre3;
    document.getElementById('checkoutt').innerText  = finalprice
    console.log(finalprice);

}


function totalClickk(click){
    const totalClicks = document.getElementById("totalClickks")
const sumValue = parseInt(totalClickks.innerText) + click
totalClicks.innerText = sumValue

if (sumValue < 0){
    totalClickks.innerText = 0
}
if (click === 0){
    totalClickks.innerText = 0
}
const pretotal = document.getElementById('pre2').innerText 
// let subTotal = subtotalDOM.innerText

let totalPrice=0;
totalPrice += (parseInt(totalClicks.innerText))* 20;
document.getElementById('pre2').innerText  = totalPrice

let finalprice = 0
let pre3 = Number(document.getElementById('pre3').innerText)
let pre2= Number(document.getElementById('pre2').innerText)
let pre1= Number(document.getElementById('pre1').innerText)
finalprice += pre1 + pre2 + pre3;document.getElementById('checkoutt').innerText  = finalprice
    console.log(finalprice);
}

function totalClickkk(click){
    const totalClicks = document.getElementById("totalClickkks")
const sumValue = parseInt(totalClickkks.innerText) + click
totalClicks.innerText = sumValue

if (sumValue < 0){
    totalClicks.innerText = 0
}
if (click === 0){
    totalClickkks.innerText = 0
}
const pretotal = document.getElementById('pre3').innerText 
// let subTotal = subtotalDOM.innerText

let totalPrice=0;
totalPrice += (parseInt(totalClicks.innerText))* 20;
document.getElementById('pre3').innerText  = totalPrice


let finalprice = 0
let pre3 = Number(document.getElementById('pre3').innerText)
let pre2= Number(document.getElementById('pre2').innerText)
let pre1= Number(document.getElementById('pre1').innerText)
finalprice += pre1 + pre2 + pre3;document.getElementById('checkoutt').innerText  = finalprice
    console.log(finalprice);

}


function finalprice(){

    let finalprice = 0
    finalprice += 20 + 20;
    document.getElementById('checkoutt').innerText  = finalprice
    console.log(finalprice);
    
}

// function renderSubtotal(){
    

//     //span inside of checkout
//     const subtotalDOM = document.querySelector('.checkoutt') 
//     let subTotal = subtotalDOM.innerText
//     let subTotalNum= Number(subTotal)
    
//    //h4 element 
//     const priceDOM = document.querySelector('.price')
//     let price = priceDOM.innerText
//     let priceNum = Number(price)
    
//     //span of total clicks
//     const totalClicksDOM = document.getElementById("totalClicks")
//     let totalClickCalculate = totalClicksDOM.innerHTML
//     let totalClickNum = Number(totalClickCalculate)

    
//     let totalPrice=0;
//     totalPrice += totalClickNum * priceNum;
//     subTotalNum.innerHTML = totalPrice
//     // subTotalNum.innerHTML = `price is ${totalPrice}`;
//     console.log(totalPrice);
// }
