

"use strict";

class Dinglemouse{

    constructor( firstName, lastName ){
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getFullName(){
        let myName;

        myName = `${this.firstName} ${this.lastName}`;

      return myName.trim();
    }
    
}

console.log(new Dinglemouse("Clint", "EastWood").getFullName());
console.log(new Dinglemouse("Clint", "").getFullName());









class Ball{
  constructor(ball1, ball2){
    this.ball1 = "";
    this.ball2 = "super";
  }
}

if((this.ball1 || this.ball2) === ""){
  return "regular";
} else {
  return (this.ball1 || this.ball2);
}






class Ball{
  constructor(ballType){
    this.ballType = ballType
  }
  
  function(){
    return ((this.ballType === "") ? "regular" : "super");
  }
}