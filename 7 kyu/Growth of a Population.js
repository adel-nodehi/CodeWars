// Growth of a Population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6

// my way
function nbYear(p0, percent, aug, p) {
  let years = 0;

  while (p0 < p) {
    p0 += Math.trunc(p0 * (percent / 100) + aug);

    years++;
  }

  return years;
}

// other way
function nbYear(p0, percent, aug, p) {
  if (p0 >= p) return false;

  return true + nbYear((p0 + (p0 * percent) / 100 + aug) | 0, percent, aug, p);
}
