// What is between?
// https://www.codewars.com/kata/55ecd718f46fba02e5000029

// my way
function between(a, b) {
  const length = b - a + 1;

  return Array.from({ length }, (_, index) => a + index);
}

// other way
function between(a, b) {
  const result = [];

  for (let i = a; i <= b; i++) result.push(i);

  return result;
}
