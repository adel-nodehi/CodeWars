// Don't give me five!
// https://www.codewars.com/kata/5813d19765d81c592200001a

// my way
function dontGiveMeFive(start, end) {
  let counter = 0;

  for (let i = start; i <= end; i++) !`${i}`.includes('5') && counter++;

  return counter;
}

// other way
function dontGiveMeFive(start, end) {
  let counter = 0;

  for (let i = start; i <= end; i++) !/5/.test(i) && counter++;

  return counter;
}
