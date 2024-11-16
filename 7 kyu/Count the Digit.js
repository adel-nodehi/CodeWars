// Count the Digit
// https://www.codewars.com/kata/566fc12495810954b1000030

// my way
function nbDig(n, d) {
  let counter = 0;

  for (let i = 0; i <= n; i++) {
    String(i * i).replaceAll(d, () => {
      counter++;
    });
  }

  return counter;
}

// other way
function nbDig(n, d) {
  let fullNumbers = '';

  for (let i = 0; i <= n; i++) fullNumbers += i ** 2;

  return fullNumbers.split(d).length - 1;
}
