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