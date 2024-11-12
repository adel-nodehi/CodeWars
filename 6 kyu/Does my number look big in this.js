// Does my number look big in this?
// https://www.codewars.com/kata/5287e858c6b5a9678200083c

// my way
function narcissistic(value) {
  return (
    (value + '').split('').reduce((sum, number, _, arr) => {
      return sum + number ** arr.length;
    }, 0) === value
  );
}

// other way
function narcissistic(value) {
  return (
    String(value)
      .split('')
      .map((num, _, numbersArr) => num ** numbersArr.length)
      .reduce((acc, num) => acc + num, 0) === value
  );
}
