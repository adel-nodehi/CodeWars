// Find The Duplicated Number in a Consecutive Unsorted List - Tougher Version
// https://www.codewars.com/kata/558f0553803bc3c4720000af

// my way
function findDup(array) {
  const pureNumbers = [];

  for (const num of array) {
    if (pureNumbers[num - 1] === num) return num;

    pureNumbers[num - 1] = num;
  }
}

// other way
function findDup(array) {
  const { length } = array;

  return array.reduce((acc, num) => acc + num, 0) - (length * (length - 1)) / 2;
}
