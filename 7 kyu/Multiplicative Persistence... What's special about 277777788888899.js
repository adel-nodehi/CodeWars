// Multiplicative Persistence... What's special about 277777788888899?
// https://www.codewars.com/kata/5c942f40bc4575001a3ea7ec

// my way
function per(n) {
  const record = [];

  while ((n / 10) | 0) {
    n = String(n)
      .split('')
      .reduce((total, num) => num * total, 1);

    record.push(n);
  }

  return record;
}

// other way
function per(n) {
  if (n < 10) return [];

  n = [...`${n}`].reduce((acc, num) => acc * num, 1);

  return [n, ...per(n)];
}
