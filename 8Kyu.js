//NO ZEROS FOR HEROS: 
//Numbers ending with zeros are boring.
//
//They might be fun in your world, but not here.
//
//Get rid of them. Only the ending ones.
//
//1450 -> 145
//960000 -> 96
//1050 -> 105
//-1050 -> -105
//Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    n = n.toString().split(''); // Converting number n to a string and splitting each digit to an array
    while (n[n.length - 1] === '0') { // Taking off the '0' at the end until there is no more '0' at the end
      n.pop(); 
    }
  return Number(n.join('')); // Returning the joined string n as a number n
  }
  // NOTE: Another possible solution would have also checked if n % 0 === 0, and if it did, divided by 10: n = n / 10, which would have returned n having no 0's at the end. 



////SQUARE(N) SUM
//Complete the square sum function so that it squares each number passed into it //and then sums the results together.
//
//For example, for [1, 2, 2] it should return 9 because 1*1 + 2*2 + 2*2 = 9

function squareSum(numbers){
  let sum = 0;
  numbers.forEach(num => {sum += Math.pow(num, 2)});
  return sum;
}


// Multiplication Table for Number
//Your goal is to return multiplication table for number that is always an //integer from 1 to 10.
//
//For example, a multiplication table (string) for number == 5 looks like below:
//
//1 * 5 = 5
//2 * 5 = 10
//3 * 5 = 15
//4 * 5 = 20
//5 * 5 = 25
//6 * 5 = 30
//7 * 5 = 35
//8 * 5 = 40
//9 * 5 = 45
//10 * 5 = 50
//P. S. You can use \n in string to jump to the next line.
//
//Note: newlines should be added between rows, but there should be no trailing //newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
  let multiTable = ``
  let product;
  for (let i = 1; i <= 9; i++){
    product = i * number;
    multiTable +=`${i} * ${number} = ${product}\n`
  };
  product = 10 * number
  return multiTable += `10 * ${number} = ${product}`
}

// REMOVE EXCLAMATION MARKS
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split('').filter(char => char !== '!').join('');
}

//IS IT A PALINDROME?
//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return (x.toLowerCase() === x.toLowerCase().split('').reverse().join(''))
}


//Century From Year (very easy)
//Introduction
//The first century spans from the year 1 up to and including the year 100, the //second century - from the year 101 up to and including the year 200, etc.
//
//Task
//Given a year, return the century it is in.
//
//Examples
//1705 --> 18
//1900 --> 19
//1601 --> 17
//2000 --> 20
let century = year => Math.ceil(year/100);


//Enumerable Magic #25 - Take the First N Elements
//Create a function that accepts a list/array and a number n, and returns a list///array of the first n elements from the list/array.

function take(arr, n) {
  return arr.splice(0, n);
}