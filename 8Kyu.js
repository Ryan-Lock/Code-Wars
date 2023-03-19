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