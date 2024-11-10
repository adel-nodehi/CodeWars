// Small enough? - Beginner
// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

// my way
function smallEnough(a, limit) {
  return a.every(number => number <= limit);
}

// other way
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
