// Changing letters
// https://www.codewars.com/kata/5831c204a31721e2ae000294

// my way
const vowels = ['a', 'o', 'e', 'i', 'u'];

function swap(string) {
  return string
    .split('')
    .map(word => (vowels.includes(word) ? word.toUpperCase() : word))
    .join('');
}

// other way
function swap(string) {
  return string.replace(/[aoeiu]/g, v => v.toUpperCase());
}
