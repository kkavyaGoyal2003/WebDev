/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str1) {

    let strRev = str1.split('').reverse().join('');

    if(str1 == strRev) {
        console.log("It is plaimdromic string");
    } else {
        console.log("It is not a plaindromic string");
    }

}

console.log(isPalindrome("cac"));