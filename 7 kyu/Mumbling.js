// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// my way
function accum(s) {
  let words = [];

  for (let i = 0; i < s.length; i++) {
    words.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
  }

  return words.join('-');
}

// other way
function accum(s) {
  return s
    .split('')
    .map((word, i) => word.toUpperCase() + word.toLowerCase().repeat(i))
    .join('-');
}
