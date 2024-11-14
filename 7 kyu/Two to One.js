// Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// my way
function longest(s1, s2) {
  const result = [];
  const fullString = s1 + s2;

  for (let i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);
    if (fullString.includes(String.fromCharCode(i))) result.push(char);
  }

  return result.join('');
}

// other way
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}
