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