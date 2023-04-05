//CHECK THE EXAM
//The first input array is the key to the correct answers to an exam, like ["a", //"a", "b", "d"]. The second one contains a student's submitted answers.
//
//The two arrays are not empty and are the same length. Return the score for this //array of answers, giving +4 for each correct answer, -1 for each incorrect //answer, and +0 for each blank answer, represented as an empty string (in C the //space character is used).
//
//If the score < 0, return 0.
//
//For example:
//
//checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
//checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
//checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
//checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
    let score = 0;
  
    array1.forEach((answer, index) => {
      //Looping through answer array, if the answer at each index is the same as array2's answer at that index, add 4 to the score
      if (answer === array2[index]){ 
        score += 4
        // If the answers in both arrays are not the same AND the array 2 answer is NOT empty, subtract 1 from the score.
      } else if (answer !== array2[index] && array2[index] !== '') {
        score -= 1
      };
    });
    return score < 0 ? 0 : score; 
  }

// DESCENDING ORDER
//Your task is to make a function that can take any non-negative integer as an //argument and return it with its digits in descending order. Essentially, //rearrange the digits to create the highest possible number.
//
//Examples:
//Input: 42145 Output: 54421
//
//Input: 145263 Output: 654321
//
//Input: 123456789 Output: 987654321

function descendingOrder(n){
  // Turning n into a string and splitting it to an array to sort it, rejoin it, and turn it back into an int
  return parseInt(n.toString().split('').sort((a,b) => b-a).join(''));
}


//SUM OF TWO LOEST POSITIVE INTEGERS
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//For example, when an array is passed like [19, 5, 42, 2, 77], the output should //be 7.
//
//[10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  let lowOne = numbers.sort((a,b)=> a - b).shift();
  let lowTwo = numbers.sort((a,b)=> a - b).shift();
  return lowOne+lowTwo;
}


//FIND THE CAPITALS
//Instructions
//Write a function that takes a single string (word) as argument. The function //must return an ordered list containing the indexes of all capital letters in //the string.
//
//Example
//Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = function (word) {
	let testCase = word.toUpperCase();
  let indexArr = [];
  console.log(word.split(''));
  for (let i = 0; i < word.length; i++){
    if (word[i] === testCase[i]){
      indexArr.push(i);
    }
  }
  return indexArr
};

//FIX STRING CASE
//In this Kata, you will be given a string that may have mixed uppercase and //lowercase letters and your task is to convert that string to either lowercase //only or uppercase only based on:
//
//make as few changes as possible.
//if the string contains equal number of uppercase and lowercase letters, convert //the string to lowercase.
//For example:
//
//solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" //to lowercase.
//solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to //uppercase.
//solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
  let upper = 0;
  let lower = 0;
  
  for (let i = 0; i < s.length; i++){
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {upper += 1}
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {lower += 1};
  }
  
  if (lower > upper || lower === upper) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}

//FACTORIAL
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

//Write a function to calculate factorial for a given input. If input is below 0 //or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or //IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError //(JavaScript) or ValueError (Python) or return -1 (C).
function factorial(n) {
  if (n < 0 || n > 12) { 
    throw new RangeError("The argument must be between 0 and 12");
  }
  if (n === 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = n; i > 0; i--){
      factorial *= i;
    }
    return factorial;
  }
}