"use strict";

//SOLUTION BY MARWAN ABDOU
var array1=[3, 1, 7, 9]
var array2=[2, 4, 1, 9, 3]



let sum1 = 0 
array1.forEach(element => {
    if (!array2.includes(element)){
    sum1 += element
}});

array2.forEach(element => {
    if (!array1.includes(element)){
    sum1 += element
}});
console.log(sum1);

class HashTable {
  constructor(size = 7) {
      // build an empty hash table with 7 items in it
      this.dataMap = new Array(size) //datamap is the address space //

  }
  // _hash func to generate a random address //

  _hash(key) {
      let hash = 0
      for (let i = 0; i < key.length; i++) {
          hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
      }
      return hash
  }
  set(key, value) {
      let index = this._hash(key)
      if (!this.dataMap[index]) {
          this.dataMap[index] = []

      }
      this.dataMap[index].push([key, value])
      return this

  }

  get(key) {
      let index = this._hash(key)
      if (this.dataMap[index]) {
          for (let i = 0; i < this.dataMap[index].length; i++) {
              if (this.dataMap[index][i][0] === key) {
                  return this.dataMap[index][i][1]
              }

          }


      }
      return undefined

  }


}

/*The charCodeAt() method returns an integer between 0 and 65535 representing
the UTF-16 code unit at the given index. */
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const index = 5;
// console.log(sentence.charCodeAt(index))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt


// console.log(myHashTable)

// myHashTable.set('nails', 1000)
// console.log(myHashTable)

// let address = myHashTable.get('nails')
// console.log(address);
const ht = new HashTable();


let joined = array1.concat(array2)
const count = {}
console.log(`The joined array is [ ${joined} ]`);

joined.forEach(element =>{
  count[element] = (count[element] || 0) + 1
})
console.log(count);

let key;
let value;
let sum = 0

for(key in (count)){
  value +=count[key]
  ht.set(key, value)
  if (ht.get(key) === 1){
    sum += Number(key)
    
  
  };
}
console.log(sum);