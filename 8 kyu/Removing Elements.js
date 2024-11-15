// Removing Elements
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// my way
function removeEveryOther(arr) {
  return arr.filter((_, i) => i % 2 === 0);
}

// other way
function removeEveryOther(arr) {
  for (let i = 0; i < arr.length; i++) arr.splice(i + 1, 1);

  return arr;
}
