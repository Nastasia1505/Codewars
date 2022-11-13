//EX 1++
//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let arr = str.split('');
  let vowels = 0;

  console.log(arr)
  arr.forEach((item) => {
    if (item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u') {
      vowels = vowels + 1;
    }
  });
  return vowels
}

//EX 2++
//Your task is to make a function that can take any non-negative integer as an argument and return 
//it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n) {
  if (n >= 0) {
    let str = String(n);
    let arr = str.split('')
    arr.sort(function (a, b) {
      return b - a
    })
    return (Number(arr.join('')))
  }
}


// EX 3++
//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
  sum = 0;
  array.forEach((item) => {
    sum += item;
  })
  if (sum % 2 == 0) {
    return `even`
  } else {
    return `odd`
  }
}
//Secound 
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}

//EX 4++
//In this kata you will create a function that takes a list of non-negative integers 
//and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  const a = l.filter((item) => {
    if (typeof item === 'number') {
      return true
    } else {
      return false
    }
  })
  return (a)
}
filter_list([1, "a", "b", 0, 15])



//EX 5++
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
//Implement a function that determines whether a string that contains only letters is an isogram. 
//Assume the empty string is an isogram. Ignore letter case.
//Example: (Input --> Output)
//"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}


//EX 6++
//Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr){
  let arr1 = arr.sort((a,b) => {return a-b})
  let arr2 = []
  arr2.push(arr1[0], arr1[arr1.length-1])
  return arr2
}

//secound
function minMax(arr){
  var max = arr[0], min = arr[0];
  for(var i=0; i<arr.length; i++) {
    if(arr[i]>max) max = arr[i];
    if(arr[i]<min) min = arr[i];
  }
  return [min,max];
}


//EX 7++
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
//No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455.
function sumTwoSmallestNumbers(numbers) {  
 numbers.sort((a,b)=> {return a-b})
let count = 0;
return count = numbers[0]+numbers[1]
}


//EX 8++
//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//Write a function which takes a list of strings and returns each line prepended by the correct number.
//The numbering starts at 1. The format is n: string. Notice the colon and space in between.
var number=function(array){
  let newArr = [];
  let number = 1;
  let a = ": "
  array.forEach((item)=>{
newArr.push(number+a+item)

number++
})
return(newArr)
}

//EX
//In this kata you get the start number and the end number of a region and should return 
//the count of all numbers except numbers with a 5 in it. 
//The start and the end number are both inclusive!
function dontGiveMeFive(start, end){
let arr = [];
for (let i=start; i<=end; i++){
  arr.push(i)
}


console.log (arr.length)
}

dontGiveMeFive(1,9)











//EX Remove the minimum
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
//If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.
function removeSmallest(numbers) {
    let min = numbers[0];
    let arr =[];
    for(let i=0; i<numbers.length; i++) {
      if(numbers[i]<min) min = numbers[i];
    }

   numbers.filter((item)=>{
    if (item !== min){
      arr.push(item)
    }
   })
  console.log(arr)
}

removeSmallest([2, 2, 1, 2, 1])
















//EX Vowel one
//Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
//All non-vowels including non alpha characters (spaces,commas etc.) should be included.
function vowelOne(s) {
  s = s.toLowerCase();


}

vowelOne("vowelOne")






//EX Highest and Lowest
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
  let cur = '', min, max;
  for (let i = 0; i < numbers.length; i++) {
    cur += numbers[i];
    if (+numbers[i] && !+numbers[i + 1]) {
      if (typeof min !== 'number' || cur < +min) min = +cur;
      if (typeof max !== 'number' || cur > +max) max = +cur;
      cur = '';
    }
  }
  return (max + ' ' + min)
}


let str = '8 3 -5 42 -1 0 0 -9 4 7 4 -4'
let cur = '', min, max;
for (let i = 0; i < str.length; i++) {
  cur += str[i];
  if (+str[i] && !+str[i + 1]) {
    if (typeof min !== 'number' || cur < +min) min = +cur;
    if (typeof max !== 'number' || cur > +max) max = +cur;
    cur = '';
  }
}
console.log('Min:', min, 'Max:', max)















//EX  Disemvowel Trolls
//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.
// function disemvowel(str) {
//   let arr = str.split('');

//   arr.forEach((item, index) => {
//     if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
//       arr.splice(item)
//     } else if (item === 'A' || item === 'E' || item === 'I' || item === 'O' || item === 'U'){
//       arr.splice(item)
//     }
//      else {
//       return true
//     }
//   })
// console.log (arr.join(''))
// }

// disemvowel('This website is for losers LOL!')

//EX
//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer

// function squareDigits(num){
//   let str = String(num);
//   let arr = str.split('')
//  let newArray = arr.map((item)=>{
//    item**2
// })

// console.log(newArray.join())
// }

// squareDigits(9119)

