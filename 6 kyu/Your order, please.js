// Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// my way
function findNumber(string) {
  return string
    .split('')
    .reduce((acc, word) => (Number.isNaN(+word) ? acc : +word), null);
}

function order(words) {
  return words
    .split(' ')
    .sort((a, b) => findNumber(a) - findNumber(b))
    .join(' ');
}

// other way
function order(words) {
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ');
}
