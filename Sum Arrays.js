//8 kyu

// EX1
// //Write a function that takes an array of numbers and returns the sum of the numbers. 
// //The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// // Sum Numbers
// function sum (numbers) {
//     "use strict";


// }; DON'T WORK



// //EX 2

// function positiveSum(arr) {
//     let sum = 0;
//     arr.forEach((item) => {
//         if (item > 0) {
//             sum += item
//         }

//     })
//     return sum;
// }


// //Ex3
// //Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// function countSheeps(arrayOfSheep) {
//     let sum = 0;
//     arrayOfSheep.filter((item) => {
//         if (item==true) {
//           return  sum+1;
//         } else{
//             return false;
//         }
//     });
//     return sum;
// }

// function countSheeps(arrayOfSheep) {
//  let sum = 0;

// }        DON'T WORK


//Ex4
//Given an array of integers, return a new array with each value doubled.


// const x = [1, 3, 5];

// function maps(x){
// const b = x.map((item)=>{
//     return item*2;

// })
// console.log(b)
// }



//EX5 ++
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function evenOrOdd(number) {
//   if(number%2 ==0){
//     return ('Even')
//   } else{
//     return ('Odd')
//   }
// }

//EX6++
// Very simple, given an integer or a floating-point number, find its opposite.
// function opposite(number) {
//         return number*-1
//     }

//EX7++
//We need a function that can transform a number (integer) into a string.
// function numberToString(num) {
//     return (String(num))
//   }

//EX 8++
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// function boolToWord( bool ){
//   return bool? 'Yes': 'No';
//   }


//EX 9++
//Complete the solution so that it reverses the string passed into it.
// function solution(str){
//   let arr = str.split('');

// return(arr.reverse().join(''))  
// }

//EX 10++
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// function makeNegative(num) {
//     if (num > 0) {
//         return num * (-1)
//     }
//     else {
//         return num
//     }
// }


//EX 11++
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// function repeatStr (n, s) {
//    return (s.repeat(n))
//   }

//EX12++
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
//You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.
// function removeChar(str) {
//     let arr = str.split('');
//     let poped = arr.pop();
//     let shift = arr.shift();
//     return (arr.join(''));

// };



function removeChar(str) {
    return str.slice(1, -1);
  }
