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