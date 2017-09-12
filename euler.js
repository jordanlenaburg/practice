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

// SOLVED
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

// SOLVED
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?
// Infinite loop version
//////////////////////////////////////////
const stPrimeNum = (num) => {
    // establish count
    let count = 1;
    // for loop to check number
    for (let i = 3; i < Infinity; i+=2) {
        // check all num less than i
        for (let j = 2; j < i; j++) {
            // check if i % j === 0, if so skip to next iteration
            if (i % j === 0) {
                break
            } else if (j === i - 1) { // if loop isn't broken, add to count
                count++
            }
            // if count === num, return i (current iteration checking)
            if (count === num) {
                return i;
            }
        }
    }
};

// SOLVED
// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
// 73167176531330624919225119674426574742355349194934
// 96983520312774506326239578318016984801869478851843
// 85861560789112949495459501737958331952853208805511
// 12540698747158523863050715693290963295227443043557
// 66896648950445244523161731856403098711121722383113
// 62229893423380308135336276614282806444486645238749
// 30358907296290491560440772390713810515859307960866
// 70172427121883998797908792274921901699720888093776
// 65727333001053367881220235421809751254540594752243
// 52584907711670556013604839586446706324415722155397
// 53697817977846174064955149290862569321978468622482
// 83972241375657056057490261407972968652414535100474
// 82166370484403199890008895243450658541227588666881
// 16427171479924442928230863465674813919123162824586
// 17866458359124566529476545682848912883142607690042
// 24219022671055626321111109370544217506941658960408
// 07198403850962455444362981230987879927244284909188
// 84580156166097919133875499200524063689912560717606
// 05886116467109405077541002256983155200055935729725
// 71636269561882670428252483600823257530420752963450
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

const greatestProduct = (num) => {
    // establish var for greatest num so far
    let greatest = 1;
    // split number into array
    let array = num.split("");
    console.log(array)
    // iterate through array
    for (let i = 0; i < array.length - 13; i++) {
        // check i * following 12 digits
        let product = (array[i] * array[i+1] * array[i+2] * array[i+3] * array[i+4] * array[i+5] * array[i+6] * array[i+7] * array[i+8] * array[i+9] * array[i+10] * array[i+11] * array[i+12]);
        if (product > greatest) {
            greatest = product;
        }
    }
    return greatest;
};

console.log(greatestProduct("7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"));
