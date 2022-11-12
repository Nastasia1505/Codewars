//8 kyu

// EX1++
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
 let arr =  String(n).split('');
return arr.reverse().map(Number)
}



// //EX 2++
function positiveSum(arr) {
  let sum = 0;
  arr.forEach((item) => {
    if (item > 0) {
      sum += item
    }

  })
  return sum;
}


// //Ex3++
// //Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let sum = 0;
    arrayOfSheep.filter((item) => {
        if (item==true) {
          return  sum= sum+1;
        } else{
            return false;
        }
    });
   return sum;
}


//Ex4++
//Given an array of integers, return a new array with each value doubled.

// const x = [1, 3, 5];

function maps(x){
const b = x.map((item)=>{
    return item*2;

})
return b
}


//EX5 ++
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return ('Even')
  } else {
    return ('Odd')
  }
}

//EX6++
// Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
  return number * -1
}

//EX7++
//We need a function that can transform a number (integer) into a string.
function numberToString(num) {
  return (String(num))
}

//EX 8++
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}


//EX 9++
//Complete the solution so that it reverses the string passed into it.
function solution(str) {
  let arr = str.split('');

  return (arr.reverse().join(''))
}

//EX 10++
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  if (num > 0) {
    return num * (-1)
  }
  else {
    return num
  }
}

//EX 11++
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function repeatStr(n, s) {
  return (s.repeat(n))
}

//EX12++
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
//You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.
function removeChar(str) {
  let arr = str.split('');
  let poped = arr.pop();
  let shift = arr.shift();
  return (arr.join(''));

};

//second
function removeChar(str) {
  return str.slice(1, -1);
}



//EX 13++
//Make a simple function called greet that returns the most-famous "hello world!".
function greed() {
  return ('hello world!')
}


//EX 14++
//Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.
//summation(8) -> 36
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
var summation = function (num) {
  let arr = [];
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    arr.push(i);
    sum = sum + i
  }
  return sum
}

//EX 15++
//We need a function that can transform a string into a number. What ways of achieving this do you know?
//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
const stringToNumber = function(str){
  return Number(str)
}


//EX 16++ Count of positives / sum of negatives
//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second 
//element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  let positiveNums = 0;
  let negativeNums = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
  }
  return [positiveNums , negativeNums];
}


//EX 17++      A Needle in the Haystack
//Can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:
function findNeedle(haystack) {
  let str = 'found the needle at position ';
  let countID = 0;
  haystack.forEach((item, id) => {
    if(item == "needle"){
     countID = countID+ id
    }
  });
  return (str +countID)
}
findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])


//EX 18 ++
//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
  let str = `Hello, ${name} how are you doing today?`
  return str
  }

// EX 19++
//Implement a function which convert the given boolean value into its string representation.
function booleanToString(b){
  if (b === true){
    return `true`
    } else {
      return `false`
    }
  }

// EX 20 ++
//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
//If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.  
function lovefunc(flower1, flower2){
if (flower1 % 2 == 0 && flower2 % 2 !== 0){
  return true
} else if (flower1 % 2 !== 0 && flower2 % 2 == 0){
  return true
} else {
  return false
}
}