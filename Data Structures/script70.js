"use strict";

//
function sumOddNumbersInRow(n) {
    // The first number in the nth row is equal to (n - 1) * 2 + 1
    // The last number in the nth row is equal to (n - 1) * 2 + 1 + (2 * (n - 1))
    // The sum of the numbers in the nth row is equal to the sum of the arithmetic series from the first number to the last number, inclusive
    // The sum of an arithmetic series is equal to the average of the first and last term, multiplied by the number of terms
    // In this case, the number of terms is equal to n
    const first = (n - 1) * 2 + 1;
  const last = (n - 1) * 2 + 1 + (2 * (n - 1));
  return (first + last) * n / 2;
  }

  

  console.log(sumOddNumbersInRow(1)); // 1
  console.log(sumOddNumbersInRow(2)); // 8
  console.log(sumOddNumbersInRow(3)); // 21
  console.log(sumOddNumbersInRow(4)); // 40
  console.log(sumOddNumbersInRow(42)); // 74088




  