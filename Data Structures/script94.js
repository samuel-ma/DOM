"use strict";

function digitalRoot(n) {
    let splitStr = String(n).split("");
    let sum = 0;
    
      for(let a=0; a<splitStr.length; a++){
        for(let b=0; b<splitStr.length; b++){
          for(let c=0; c<splitStr.length; c++){
            for(let d=0; d<splitStr.length; d++){
              for(let e=0; e<splitStr.length; e++){
                for(let f=0; f<splitStr.length; f++){
                  for(let g=0; g<splitStr.length; g++){
                    for(let h=0; h<splitStr.length; h++){
                      for(let i=0; i<splitStr.length; i++){
                          for(let j=0; j<splitStr.length; j++){
                            for(let k=0; k<splitStr.length; k++){
                              for(let l=0; l<splitStr.length; l++){
                                for(let m=0; m<splitStr.length; m++){
                                  for(let n=0; n<splitStr.length; n++){
                                    for(let o=0; o<splitStr.length; o++){
                                      for(let p=0; p<splitStr.length; p++){
                                        for(let q=0; q<splitStr.length; q++){
                                          for(let r=0; r<splitStr.length; r++){
                                            for(let s=0; s<splitStr.length; s++){
                                              for(let t=0; t<splitStr.length; t++){
                                                for(let u=0; u<splitStr.length; u++){
                                                  for(let v=0; v<splitStr.length; v++){
                                                    for(let w=0; w<splitStr.length; w++){
                                                      for(let x=0; x<splitStr.length; x++){
                                                        for(let y=0; y<splitStr.length; y++){
                                                          for(let z=0; z<splitStr.length; z++){
                                                sum += Number(splitStr[i]);
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
        }
      
    return sum;
  }

console.log(digitalRoot(16));
console.log(digitalRoot(19));
console.log(digitalRoot(88));
console.log(digitalRoot(56));
console.log(digitalRoot(345));
console.log(digitalRoot(60));