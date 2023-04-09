// UNIQUE IN ORDER
//Implement the function unique_in_order which takes as argument a sequence and //returns a list of items without any elements with the same value next to each //other and preserving the original order of elements.
//
//For example:
//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Parameters would never be empty 
const uniqueInOrder = function(iterable){
    // Initializing uniques as an array of the first value in the iterable param
    let uniques = [iterable[0]]; 
    // Iterate through the iterable and simply push the next unique array item as it comes into the uniques array
      for (let i = 1; i < iterable.length; i++){
        if (iterable[i] !== iterable[i-1]){
          uniques.push(iterable[i])
        }
      }
    return uniques;
  };

// Stop gninnipS My sdroW!
//Write a function that takes in a string of one or more words, and returns the //same string, but with all five or more letter words reversed (Just like the //name of this Kata). Strings passed in will consist of only letters and spaces. //Spaces will be included only when more than one word is present.
//
//Examples:
//
//spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
//spinWords( "This is a test") => returns "This is a test" 
//spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
  // Split the string into an array so that we can loop through each word
  string = string.split(' ')
  // Using map, we check if each word is 5 characters or longer. If it is, we split the word, reverse the letters, then rejoin them, and finally, rejoin and return the array
  return string.map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ');
}

// ARE THEY THE "SAME"
//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that //checks whether the two arrays have the "same" elements, with the same //multiplicities (the multiplicity of a member is the number of times it //appears). "Same" means, here, that the elements in b are the elements in a //squared, regardless of the order.
//
//Examples
//Valid arrays
//a = [121, 144, 19, 161, 19, 144, 19, 11]  
//b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//comp(a, b) returns true because in b 121 is the square of 11, 14641 is the //square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square //of 161, and so on. It gets obvious if we write b's elements in terms of squares:
//
//a = [121, 144, 19, 161, 19, 144, 19, 11] 
//b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
//Invalid arrays
//If, for example, we change the first number to something else, comp is not //returning true anymore:
//
//a = [121, 144, 19, 161, 19, 144, 19, 11]  
//b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
//comp(a,b) returns false because in b 132 is not the square of any number of a.
//
//a = [121, 144, 19, 161, 19, 144, 19, 11]  
//b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
//comp(a,b) returns false because in b 36100 is not the square of any number of a.
//
//Remarks
//a or b might be [] or {} (all languages except R, Shell).
//a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, //D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, //Prolog, PureScript, R, Racket, Rust, Shell, Swift).
//If a or b are nil (or null or None, depending on the language), the problem //doesn't make sense so return false.
//
//Note for C
//The two arrays have the same size (> 0) given as parameter in function comp.

function comp(array1, array2){
  // Let's loop through array1 using a for loop, indexing in to each number using array1[i];
    // In each iteration, let's loop through the entire array2 to check if there is a squared unit.
    // If there IS a squared unit we've spliced out that array2 number so that on the next loop, it doesn't get checked again, as this could add extra scores to our matchScore if there are 'duplicates'
    // If matchScore is the same as the length of array1, we've got the "same" 
  
  if ((array1 === null || array2 === null) || (array1.length !== array2.length)) {
    return false;
  }
  let matchScore = 0;
  for (let i = 0; i < array1.length; i++){
    let matchFound = false;
    for (let j = 0; j < array2.length; j++){
      if (array2[j] === (array1[i] * array1[i])) {
        matchFound = true;
        array2.splice(j, 1);
        break;
      }
    }
    if (matchFound){
      matchScore += 1;
    }
  }
  return (matchScore == array1.length); 
}


// YOUR ORDER PLEASE

//Your task is to sort a given string. Each word in the string will contain a //single number. This number is the position the word should have in the result.
//
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
//If the input string is empty, return an empty string. The words in the input //String will only contain valid consecutive numbers.
//
//Examples
//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
//""  -->  ""


// This solution avoided regex, as I am not yet familiar with it in any capacity
function order(words){
  if (words === ''){
    return words;
  }
  // Need to loop through the words (turn them into an array) so you can loop through their length
  words = words.split(' ');
  
  let wordArr = words.sort((a, b) => {
    // Using the function getNumFromWord(word), we can sort each word as if it were just a number
    const wordANum = getNumFromWord(a);
    const wordBNum = getNumFromWord(b);
    return wordANum - wordBNum;
  });
  return wordArr.join(' ');

  // Function which will use charCodeAt() to check the UTF-16 code unit of each char in the word 
  function getNumFromWord(word) {
    // Initialize variable to hold the number when we find it
    let numString = ''
    for (let i = 0; i < word.length; i++) {
      // Check for digits 0-9
      if (word.charCodeAt(i) >= 48 && word.charCodeAt(i) <= 57) {
        numString += word[i];
      }
    }
    // return the number as an int
    return parseInt(numString); 
  }
}


//REPLACE WITH ALPHABET POSITION
//Welcome.
//
//In this kata you are required to, given a string, //replace every letter with its position in the //alphabet.
//
//If anything in the text isn't a letter, ignore it //and don't return it.
//
//"a" = 1, "b" = 2, etc.
//
//Example
//alphabetPosition("The sunset sets at twelve o' //clock.")
//Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 //1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a //string )

function alphabetPosition(text) {
  text = text.toLowerCase().split('');
 
  let alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
  let alphaPos = {}
  
  for (let i = 0; i < alphabet.length; i++){
    alphaPos[alphabet[i]] = i+1
  }
  
  let result = ``;
  
  for (let i = 0; i < text.length; i++){
    if (text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122){
      result += `${alphaPos[text[i]]} `
    }
  }
  return result.slice(0, -1);
}
//I initially solved using the solution below, but I thought that chaining methods might be less readable to those not as familiar with JS array methods.

//function alphabetPosition(text) {
//text = text.toLowerCase().split('');
//
//let alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
//let alphaPos = {}
//
//for (let i = 0; i < alphabet.length; i++){
//  alphaPos[alphabet[i]] = i+1
//}
//
//return text.map(x => {
//  if(x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122){
//    return alphaPos[x]
//  }
//}).filter( x => x !== undefined).join(' ');
//}

// BOUNCING BALLS
//A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

//He drops the ball out of the window. The ball //bounces (for example), to two-thirds of its height //(a bounce of 0.66).
//
//His mother looks out of a window 1.5 meters from the //ground.
//
//How many times will the mother see the ball pass in //front of her window (including when it's falling and //bouncing?
//
//Three conditions must be met for a valid experiment:
//Float parameter "h" in meters must be greater than 0
//Float parameter "bounce" must be greater than 0 and //less than 1
//Float parameter "window" must be less than h.
//If all three conditions above are fulfilled, return //a positive integer, otherwise return -1.
//
//Note:
//The ball can only be seen if the height of the //rebounding ball is strictly greater than the window //parameter.
//
//Examples:
//- h = 3, bounce = 0.66, window = 1.5, result is 3
//
//- h = 3, bounce = 1, window = 1.5, result is -1 
//
//(Condition 2) not fulfilled).

function bouncingBall(h,  bounce,  window) {
  // If test params do not meet any of the requirements we're returning -1
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  // The ball will be seen 1 + (bounce * 2) times, minus the last time it bounces based on the condition.
  let bounces = 0;
  while (h > window) {
    h *= bounce;
    bounces ++;
  }
  // Since it will run one last bounce, but the ball won't be seen. So, we subtract 1, because ball is still seen on the way down once when it is initially dropped
  return bounces*2 - 1;
}


// COUNT CHARACTERS IN YOUR STRING
//The main idea is to count all the occurring characters in a string. If you have //a string like aba, then the result should be {'a': 2, 'b': 1}.
//
//What if the string is empty? Then the result should be empty object literal, {}.
// NOTE: question does not specify whether capitalized letters should be considered unique. This method of solving would count them in addition to their lowercase counterparts.
function count(string) {
  let charCount = {}
  for (let char of string) {
    console.log(char);
    if (charCount[char]){
      charCount[char] += 1
    } else {
      charCount[char] = 1
    }
  }
  return charCount;
}

//EQUAL SIDES OF AN ARRAY
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

//For example:
//
//Let's say you are given the array {1,2,3,4,3,2,1}:
//Your function will return the index 3, because at the 3rd position of the //array, the sum of left side of the index ({1,2,3}) and the sum of the right //side of the index ({3,2,1}) both equal 6.
//
//Let's look at another one.
//You are given the array {1,100,50,-51,1,1}:
//Your function will return the index 1, because at the 1st position of the //array, the sum of left side of the index ({1}) and the sum of the right side of //the index ({50,-51,1,1}) both equal 1.
//
//Last one:
//You are given the array {20,10,-80,10,10,15,35}
//At index 0 the left side is {}
//The right side is {10,-80,10,10,15,35}
//They both are equal to 0 when added. (Empty arrays are equal to 0 in this //problem)
//Index 0 is the place where the left side and right side are equal.
//
//Note: Please remember that in most programming/scripting languages the index of //an array starts at 0.
//
//Input:
//An integer array of length 0 < arr < 1000. The numbers in the array can be any //integer positive or negative.
//
//Output:
//The lowest index N where the side to the left of N is equal to the side to the //right of N. If you do not find an index that fits these rules, then you will //return -1.
//
//Note:
//If you are given an array with multiple answers, return the lowest correct //index.

function findEvenIndex(arr) {
  let arr1;
  let arr2;
  let matching;
  // Empty arrays == 0 
  // Move through array one by one.
  // at each index, split array into the two halves (the index isn't included)
    // arr.slice(0, i) for left half, arr.slice(i+1) for right half
    // Array.reduce each array and assign to arr1 and arr2
      //if at any point after slice arr1 or arr2 are empty, reassign to 0
  for (let i = 0; i < arr.length; i++){ 
    arr1 = arr.slice(0, i); 
    arr2 = arr.slice(i+1);
    
    if (arr1.length === 0) {
      arr1 = 0;
    } else {
      arr1 = arr1.reduce((start, current) => start + current, 0);
    }
    if (arr2.length === 0) {
      arr2 = 0;
    } else {
      arr2 === [] ? arr2 = [0] : arr2 = arr2.reduce((start, current) => start + current, 0)
    }
    
    if (arr1 === arr2){
      matching = i;
      break; // stop at first match 
    } 
  }
  return matching !== undefined ? matching : -1
}