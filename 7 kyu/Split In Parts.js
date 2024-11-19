// Split In Parts
// https://www.codewars.com/kata/5650ab06d11d675371000003

// my way
const splitInParts = function (s, partLength) {
  return s
    .split('')
    .reduce((str, _, i) => {
      if (i % partLength === 0) return `${str} ${s.slice(i, i + partLength)}`;

      return str;
    }, '')
    .trim();
};

// other way
const splitInParts = function (s, partLength) {
  const array = s.split('');
  const parts = [];

  while (array.length) {
    parts.push(array.splice(0, partLength).join(''));
  }

  return parts.join(' ');
};
