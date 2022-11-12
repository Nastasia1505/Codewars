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
array.forEach((item)=>{
  sum += item ;
})
if (sum%2 ==0){
  return `even`
} else {
  return `odd`
}
}
 //Secound 
 function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}











//EX Highest and Lowest
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
  let cur = '', min, max;
  for (let i = 0; i <numbers.length; i++){
    cur += numbers[i];
      if (+numbers[i] && !+numbers[i+1]) {
        if (typeof min !== 'number' || cur < +min) min = +cur;
        if (typeof max !== 'number' || cur > +max) max = +cur;
        cur = '';
      }
  }
  return (max +' '+ min)
}


let str = '8 3 -5 42 -1 0 0 -9 4 7 4 -4'
let cur='', min, max;
for (let i = 0; i < str.length; i++) {
  cur += str[i];
  if (+str[i] && !+str[i+1]) {
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

// //EX
// //Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// //For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// //Note: The function accepts an integer and returns an integer
// function squareDigits(num){
//   let str = String(num);
//   let arr = str.split('')
//  let newArray = arr.map((item)=>{
//    item*item
// })

// console.log(newArray)
// }

// squareDigits(9119)

