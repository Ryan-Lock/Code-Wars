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


//COUNT THE DIGIT
//Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

//Square all numbers k (0 <= k <= n) between 0 and n.
//
//Count the numbers of digits d used in the writing of all the k**2.
//
//Implement the function taking n and d as parameters and returning this count.
//
//Examples:
//n = 10, d = 1 
//the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
//We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
//
//The function, when given n = 25 and d = 1 as argument, should return 11 since
//the k*k that contain the digit 1 are:
//1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
//So there are 11 digits 1 for the squares of numbers between 0 and 25.
//Note that 121 has twice the digit 1.

function nbDig(n, d) {
  // TAKE N, AND FOR EACH NUMBER UP TO N, SQUARE IT (K), FIND WHICH NUMBERS CONTAIN (d)
// Function to count occurences of a digit in a number. Uses filter to turn the number in to only the occurences of digit(d),
// and its length will be the number of occurences
function countDigit(number, digit) {
  return number.toString().split('').filter(char => char === digit.toString()).length;
}

let includes = 0;
for (let i = 0; i <= n; i++){
    let k = i*i;
    includes += countDigit(k, d);
  }
return includes;
}

//TWO FIGHTERS, ONE WINNER
//Create a function that returns the name of the winner in a fight between two //fighters.
//
//Each fighter takes turns attacking the other and whoever kills the other first //is victorious. Death is defined as having health <= 0.
//
//Each fighter will be a Fighter object/instance. See the Fighter class below in //your chosen language.
//
//Both health and damagePerAttack (damage_per_attack for python) will be integers //larger than 0. You can mutate the Fighter objects.
//
//Your function also receives a third argument, a string, with the name of the //fighter that attacks first.
//
//Example:
//  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
//  
//  Lew attacks Harry; Harry now has 3 health.
//  Harry attacks Lew; Lew now has 6 health.
//  Lew attacks Harry; Harry now has 1 health.
//  Harry attacks Lew; Lew now has 2 health.
//  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {
  let currentAttacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let currentDefender = firstAttacker === fighter1.name ? fighter2 : fighter1;

  while (fighter1.health > 0 && fighter2.health > 0) {
      currentDefender.health -= currentAttacker.damagePerAttack;
      [currentAttacker, currentDefender] = [currentDefender, currentAttacker];
  }

  return fighter1.health <= 0 ? fighter2.name : fighter1.name;
}

// ROW WEIGHTS
// Scenario
//Several people are standing in a row divided into two teams.
//The first person goes into team 1, the second goes into team 2, the third goes //into team 1, and so on.
//
//Task
//Given an array of positive integers (the weights of the people), return a new //array/tuple of two integers, where the first one is the total weight of team 1, //and the second one is the total weight of team 2.
//
//Notes
//Array size is at least 1.
//All numbers will be positive.
function rowWeights(array){
  if (array.length === 1) { return [array[0], 0] }
  else {
    let left = array.filter((elem, ind) => ind % 2 == 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let right = array.filter((elem, ind) => ind % 2 != 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return [left, right]
  }
}