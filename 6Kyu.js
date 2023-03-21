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