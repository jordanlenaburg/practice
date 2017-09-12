// SOLVED
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
const multiples = () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            sum = sum + i;
        }
    }
    return sum
};
// SOLVED
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//     1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
const evenFib = () => {
    let sum = 2;
    let sequence = [1, 2, 3];
    for (let i = 0; i < 100; i++) {
        let currentNum = (sequence[sequence.length-2] + sequence[sequence.length-1]);
        if (currentNum >= 4000000) {
            break;
        }
        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
        sequence.splice(0, 1);
        sequence.push(currentNum)

    }
    return sum;
};
// SOLVED
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
const primeFactor = (num) => {
    let factors = [];
    let count = 2;
    let remainingMultiple = num;
    for (let i = 0; i < 100000; i++) {
        if (remainingMultiple % count === 0) {
            // console.log(remainingMultiple)
            remainingMultiple = remainingMultiple / count;
            factors.push(count)
            count = 2
        } else {
            count++
        }
    }
    return factors;
};
//SOLVED
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
const palindrome = () => {
    let number = 0;
    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) {
            let product = (i * j);
            let string = product.toString();
            let array = string.split("");
            if (array.reverse().join("") === string && product > number){
                    number = product
            }
        }
    }
    return number;
};
// SOLVED
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
// Recursively, this might exceed the maximum call stack
///////////////////////////////////////////
// const evenDivisorRecursive = (divisor, num) => {
//     // if divisor reaches 0, return num
//     if (divisor <= 0){
//         return num;
//     }
//     // try num % divisor, if 0, decrease divisor by 1
//     else if (num % divisor === 0) {
//         return evenDivisor(divisor-1, num)
//     }
//     // if not 0, increase num, reset divisor
//     else {
//         return evenDivisor(20, num+1)
//     }
// };
// Non-recursive
///////////////////////////////////////////
const evenDivisor = (divisor) => {
    // establish current number
    let num = 1;
    // establish for loop with divisor as index tracker
    for (let i = divisor; i > 0; i--) {
        // check if number % divisor (marked as i) === 0
        if (num % i !== 0){
            // if not, increase current number, reset divisor
            num++
            i = divisor
        }
        // if so, got to next iteration
    }
    return num;
};

// UNSOLVED
// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//     (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquareDifference = (num) => {
    //establish variables
    let sum = 0;
    let square = 0;
    //establish for loop to iterate through num
    for (var i = 1; i <= num; i++){
        // sum of squares
        sum += Math.pow(i, 2);
        // sum
        square += i;
    }
    // square the sum
    square = Math.pow(square, 2);
    // return difference
    return square - sum;

};

console.log(sumSquareDifference(100));