/**
 * Task 1 - Magic Latin
 * Your task is move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 * @param str
 */
function magicLatin(str) {
  const wordsArray = str.split(' ');
  const newWordsArray = [];
  const regex = new RegExp(/[.,/#!$%^&*;:{}=_`~()]/g);

  wordsArray.forEach((word) => {
    let newWord = word;
    if (!regex.test(word)) {
      newWord = word + word[0] + 'ay';
      newWord = newWord.substring(1);
    }
    newWordsArray.push(newWord);
  });

  console.log(newWordsArray.join(' '));
}

magicLatin('Magic latin is cool'); // agicMay atinlay siay oolcay
magicLatin('Hello world !');     // elloHay orldWay !

/**
 * Task 2 - Valid Parentheses
 * Your task is to write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
 * @param str
 * @returns {boolean}
 */
function validParentheses(str) {
  let leftParenthesis = 0;
  let isValid = true;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '(') {
      leftParenthesis++;
    } else if (str.charAt(i) === ')') {
      leftParenthesis--;
    }
    if (leftParenthesis < 0) {
      isValid = false;
    }
  }

  return leftParenthesis === 0 ? isValid : false;
}

console.log(validParentheses("()")); //true
console.log(validParentheses(")(()))")); //false
console.log(validParentheses(")(())(")); //false
console.log(validParentheses("(())((()())())")); //true


/**
 * Task 3 - Binary number divisible by 5
 * You need to define a regular expression which tests if a given string representing a binary
 * number is divisible by 5.
 * @type {RegExp}
 */
const divisibleByFive = new RegExp("^(0|1(10)*(0|11)(01*01|01*00(10)*(0|11))*1)*$");
// 5 divisable by 5
console.log(divisibleByFive.test('101'));// === true
// 135 divisable by 5
console.log(divisibleByFive.test('10000111'));// === true
// 666 not divisable by 5
console.log(divisibleByFive.test('0000001010011010'));// === false


/**
 * Task 4 - Next bigger number
 * You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits.
 * @param num
 * @returns {number}
 */
function nextBigger(num) {
  num += '';
  let biggerNum = -1;
  let fixIndex = null;

  for (let i = num.length - 1; i > 0; i--) {
    if (num[i - 1] < num[i]) {
      fixIndex = i - 1;
      break;
    }
  }

  if (fixIndex === null) { //Have not the bigger number, return -1.
    return biggerNum;
  }

  const fixPart = num.substring(0, fixIndex);
  const rightPart = num.substring(fixIndex);
  const resortedRightPart = rightPart.split('').sort().join('');

  //To find the min number in the resorted right part.
  let minIndexInResortedRightPart = 0;
  while (minIndexInResortedRightPart < resortedRightPart.length && (+resortedRightPart[minIndexInResortedRightPart]) <= (+num[fixIndex])) {
    minIndexInResortedRightPart++;
  }

  biggerNum = fixPart + resortedRightPart[minIndexInResortedRightPart] + resortedRightPart.substring(0, minIndexInResortedRightPart) + resortedRightPart.substring(minIndexInResortedRightPart + 1);

  return +biggerNum;
}

console.log(nextBigger(12));// == 21
console.log(nextBigger(513));// == 531
console.log(nextBigger(2017));// == 2071
console.log(nextBigger(111));// == -1
console.log(nextBigger(531));// == -1
console.log(nextBigger(8737654));//8743567
console.log(nextBigger(8757654));//8764557
