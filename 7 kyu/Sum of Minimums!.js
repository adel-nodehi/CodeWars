// Sum of Minimums!
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

// my way
function sumOfMinimums(arr) {
  return arr.reduce((total, curArray) => total + Math.min(...curArray), 0);
}

// other way
function sumOfMinimums(arr) {
  return arr.reduce((total, curArray) => {
    curArray.sort((a, b) => a - b);

    return total + curArray[0];
  }, 0);
}
