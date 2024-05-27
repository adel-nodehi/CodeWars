'use strict';

/* // Simple Change Machine
// url [https://www.codewars.com/kata/57238766214e4b04b8000011]

function changeMe(moneyIn) {
  const result = [];
  const coinValue = [20, 10];
  let coin;

  // Convert to coin
  if (moneyIn[0] === '£') coin = moneyIn.slice(1) * 100;
  if (moneyIn.at(-1) === 'p') coin = moneyIn.slice(0, -1);

  // Check if valid
  if (coin > 500 || coin < 20 || !coin || moneyIn.includes(' ')) return moneyIn;
  const validCoinValue = coinValue.filter(el => el < coin);

  // Dividing coin
  while (coin > 0) {
    const closesNumber = validCoinValue.find(el => el <= coin);
    coin -= closesNumber;
    result.push(closesNumber);
  }

  // Building the string
  const resultString = result.map(coin => `${coin}p`).join(' ');

  return resultString;
}

let actual = changeMe('£1');
console.log(actual, ': 20p 20p 20p 20p 20p');
console.log(changeMe('20p 20p'));
*/

/*
// Sentence Smash
// url [https://www.codewars.com/kata/53dc23c68a0c93699800041d]
function smash(words) {
  return words.join(' ');
}
*/

/*
// Reversed Strings
// url [https://www.codewars.com/kata/5168bb5dfe9a00b126000018]
const solution = str => str.split('').reverse().join('');
*/

/*
// Powers of 2
// url [https://www.codewars.com/kata/57a083a57cb1f31db7000028]

function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}

console.log(powersOfTwo(0), [1]);
console.log(powersOfTwo(1), [1, 2]);
console.log(powersOfTwo(4), [1, 2, 4, 8, 16]);
*/

/*
// Flick Switch
// url [https://www.codewars.com/kata/64fbfe2618692c2018ebbddb]
function flickSwitch(arr) {
  let state = true;

  return arr.map(el => {
    if (el === 'flick') state = !state;
    return state;
  });
}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']), [
  true,
  false,
  false,
  false,
]);
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']), [
  false,
  false,
  false,
  false,
]);
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']), [
  true,
  true,
  false,
  false,
  true,
]);
console.log(flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick']), [
  false,
  true,
  false,
  true,
  false,
]);
console.log(flickSwitch(['john, smith, susan', 'flick']), [true, false]);
console.log(flickSwitch(['bicycle']), [true]);
console.log(flickSwitch(['flick']), [false]);
console.log(flickSwitch([]), []);
*/

/*
// Rock Paper Scissors!
// url [https://www.codewars.com/kata/5672a98bdbdd995fad00000f]
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';

  let winnerPlayer = 1;

  if (p1 === 'rock' && p2 === 'paper') winnerPlayer = 2;
  if (p1 === 'paper' && p2 === 'scissors') winnerPlayer = 2;
  if (p1 === 'scissors' && p2 === 'rock') winnerPlayer = 2;

  return `Player ${winnerPlayer} won!`;
};

const getMsg = n => `Player ${n} won!`;
console.log(rps('rock', 'scissors'), getMsg(1));
console.log(rps('scissors', 'paper'), getMsg(1));
console.log(rps('paper', 'rock'), getMsg(1));
console.log(rps('scissors', 'rock'), getMsg(2));
console.log(rps('paper', 'scissors'), getMsg(2));
console.log(rps('rock', 'paper'), getMsg(2));
console.log(rps('rock', 'rock'), 'Draw!');
console.log(rps('scissors', 'scissors'), 'Draw!');
console.log(rps('paper', 'paper'), 'Draw!');
*/

/*
// Simple Fun #352: Reagent Formula
// url [https://www.codewars.com/kata/59c8b38423dacc7d95000008]


// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
 
function isValid(formula) {
  let isValid = true;

  if (formula.includes(1) && formula.includes(2)) isValid = false;

  if (formula.includes(3) && formula.includes(4)) isValid = false;

  if (
    (formula.includes(5) && !formula.includes(6)) ||
    (!formula.includes(5) && formula.includes(6))
  )
    isValid = false;

  if (!formula.includes(7) && !formula.includes(8)) isValid = false;

  return isValid;
}

console.log(isValid([1, 3, 7]), true);
console.log(isValid([7, 1, 2, 3]), false);
console.log(isValid([1, 3, 5, 7]), false);
console.log(isValid([1, 5, 6, 7, 3]), true);
console.log(isValid([5, 6, 7]), true);
console.log(isValid([5, 6, 7, 8]), true);
console.log(isValid([6, 7, 8]), false);
console.log(isValid([7, 8]), true);
*/

/*
// Simple reversal game
// url [https://www.codewars.com/kata/5b93636ba28ce032600000b7]
function solve(n, k) {
  let arr = Array.from({ length: n }, (cur, i) => i);

  for (let i = 0; i < n; i++) {
    arr = arr.slice(0, i).concat(arr.slice(i).reverse());
  }

  return arr.indexOf(k);
}

console.log(solve(4, 1), 3);
console.log(solve(4, 2), 2);
console.log(solve(4, 3), 0);
console.log(solve(20, 8), 17);
console.log(solve(20, 9), 19);
console.log(solve(20, 10), 18);
*/

/*
// T.T.T.27: Four piles of apples
// url [https://www.codewars.com/kata/57aae4facf1fa57b3300005d]
function fourPiles(n, y) {
  const x = (y * n) / ((2 + y) * y + 1);

  if (!Number.isInteger(x)) return [];

  const result = [x + y, x - y, x * y, x / y];
  const isValid = result.every(num => num > 0);

  return isValid ? result : [];
}
console.log(fourPiles(48, 3), [12, 6, 27, 3]);
console.log(fourPiles(100, 4), [20, 12, 64, 4]);

console.log(fourPiles(25, 4), []);
console.log(fourPiles(24, 4), []);
*/

/*
// Jaden Casing Strings
// url [https://www.codewars.com/kata/5390bac347d09b7da40006f6]
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(str => str[0].toUpperCase() + str.slice(1))
    .join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
console.log("How Can Mirrors Be Real If Our Eyes Aren't Real");
*/

/*
const sum = (arr, from, to) =>
  arr.slice(from, to).reduce((acc, num) => num + acc, 0);

// function findEvenIndex(arr) {
// for (let i = 0; i < arr.length; i++) {
//   const leftSide = sum(arr, 0, i);
//   const rightSide = sum(arr, i + 1);
//   if (leftSide === rightSide) {
//     return i;
//   }
// }
// return -1;
// }

const findEvenIndex = arr =>
  arr.findIndex((_, i) => sum(arr, 0, i) === sum(arr, i + 1));

console.log(
  findEvenIndex([1, 2, 3, 4, 3, 2, 1]),
  3,
  'The array was: [1,2,3,4,3,2,1] \n'
);
console.log(
  findEvenIndex([1, 100, 50, -51, 1, 1]),
  1,
  'The array was: [1,100,50,-51,1,1] \n'
);
console.log(
  findEvenIndex([1, 2, 3, 4, 5, 6]),
  -1,
  'The array was: [1,2,3,4,5,6] \n'
);
console.log(
  findEvenIndex([0, 0, 0, 0, 0]),
  0,
  'The array was: [20,10,30,10,10,15,35] \n'
);
console.log(
  findEvenIndex([20, 10, -80, 10, 10, 15, 35]),
  0,
  'The array was: [20,10,-80,10,10,15,35] \n'
);
*/

/*
const punctuationMark = ['!', '.'];

const pigIt = str =>
  str
    .split(' ')
    .map(word =>
      punctuationMark.includes(word) ? word : word.slice(1) + word[0] + 'ay'
    )
    .join(' ');

console.log(pigIt('Pig latin is cool'), '\nigPay atinlay siay oolcay');
console.log(pigIt('This is my string'), '\nhisTay siay ymay tringsay');
console.log(pigIt('This is my string !'), '\nhisTay siay ymay tringsay !');
*/
/*
function solution(text, markers) {
  return text
    .split('\n')
    .flatMap(line => {
      line = line.split('');

      const index = line.findIndex(char => markers.includes(char));

      if (index > -1) line.splice(index).join('');

      return line.join('').trimEnd();
    })
    .join('\n');
}

const tests = [
  // ['aa bb cc', [], 'aa bb cc'],
  ['aa bb cc  ', [], 'aa bb cc'],
  // ['  aa bb cc', [], '  aa bb cc'],
  // ['  aa # bb # cc  ', [], '  aa # bb # cc'],

  // ['aa bb cc', ['#'], 'aa bb cc'],
  // ['aa bb # cc', ['#'], 'aa bb'],
  // ['aa# bb cc', ['#'], 'aa'],
  // ['aa #bb cc', ['#'], 'aa'],
  // ['aa # bb # cc', ['#'], 'aa'],
  // ['#aa bb cc', ['#'], ''],

  // ['#aa bb\ncc dd', ['#'], '\ncc dd'],
  // ['aa # bb\ncc dd', ['#'], 'aa\ncc dd'],
  // ['aa bb\n#cc dd', ['#'], 'aa bb\n'],
  // ['aa bb\ncc # dd', ['#'], 'aa bb\ncc'],
  // ['aa bb\ncc dd#', ['#'], 'aa bb\ncc dd'],

  // ['aa bb\ncc dd', ['#', '!'], 'aa bb\ncc dd'],
  // ['aa # bb\ncc dd', ['#', '!'], 'aa\ncc dd'],
  // ['aa bb\ncc ! dd', ['#', '!'], 'aa bb\ncc'],
  // ['#aa bb\n!cc dd', ['#', '!'], '\n'],
  // ['aa ! bb\ncc # dd', ['#', '!'], 'aa\ncc'],
  // ['aa bb#\ncc dd!', ['#', '!'], 'aa bb\ncc dd'],

  // ['aa + bb\ncc - dd\nee * ff', ['+', '-', '*'], 'aa\ncc\nee'],
  // ['aa / bb\ncc ^ dd\nee $ ff', ['/', '^', '$'], 'aa\ncc\nee'],
];

tests.forEach(([text, markers, expected]) =>
  console.log(solution(text, markers), expected)
);
*/

/*
// Note: You are given a function isArray(o) that returns
// whether its argument is an array.
const isArray = arr => arr instanceof Array;

Array.prototype.sameStructureAs = function (other) {
  let hasSameStructure = true;
  console.log('call');
  if (this.length !== other.length) return false;

  if (isArray(this) && isArray(other)) {
    const result = this.find((el, i) => {
      if (isArray(this[i]) && isArray(other[i])) {
        return !this[i].sameStructureAs(other[i]);
      }

      if (
        (isArray(this[i]) && !isArray(other[i])) ||
        (!isArray(this[i]) && isArray(other[i]))
      )
        return true;

      return false;
    });

    if (result !== undefined) hasSameStructure = false;
  } else {
    hasSameStructure = false;
  }
  return hasSameStructure;
};

// console.log([1, 1, 1].sameStructureAs([2, 2, 2]), '[1,1,1] same as [2,2,2]');

// console.log(
//   [1, [1, 1]].sameStructureAs([2, [2, 2]]),
//   '[1,[1,1]] same as [2,[2,2]]'
// );
// console.log(
//   [1, [1, 1]].sameStructureAs([[2, 2], 2]),
//   '[1,[1,1]] not same as [[2,2],2]'
// );
// console.log(
//   [1, [1, 1]].sameStructureAs([2, [2]]),
//   '[1,[1,1]] not same as [2,[2]]'
// );

// console.log(
//   [[[], []]].sameStructureAs([[[], []]]),
//   '[[[],[]]] same as [[[],[]]]'
// );
// console.log(
//   [[[], []]].sameStructureAs([[1, 1]]),
//   '[[[],[]]] not same as [[1,1]]'
// );

// console.log(
//   [1, [[[1]]]].sameStructureAs([2, [[[2]]]]),
//   '[1,[[[1]]]] same as [2,[[[2]]]]'
// );

// console.log([].sameStructureAs(1), '[] not same as 1');
// console.log([].sameStructureAs({}), '[] not same as {}');

// console.log(
//   [1, '[', ']'].sameStructureAs(['[', ']', 1]),
//   "[1,'[',']'] same as ['[',']',1]"
// );

// console.log([1, 2].sameStructureAs([[3], 3]), '[1,2] not same as [[3],3]');
*/
