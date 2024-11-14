// Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// my way
function sumArray(array) {
  if (!array || array.length <= 2) return 0;

  return (
    array.reduce((sum, cur) => sum + cur, 0) -
    Math.min(...array) -
    Math.max(...array)
  );
}

// other way
function sumArray(array) {
  if (!array || array.length <= 2) return 0;

  let sum = 0;

  array.sort((a, b) => a - b);

  for (let i = 1; i < array.length - 1; i++) {
    sum += array[i];
  }

  return sum;
}
