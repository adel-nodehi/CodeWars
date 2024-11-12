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
const directions = {
  W: [0, 1],
  S: [0, -1],
  A: [-1, 0],
  D: [1, 0],
};

function coordinateHelper(commands) {
  return commands
    .filter(cmd => /^[WSAD]\d+$/.test(cmd))
    .map(cmd => [directions[cmd[0]], +cmd.slice(1)])
    .reduce(
      ([x, y], [[xDir, yDir], distance]) => [
        x + xDir * distance,
        y + yDir * distance,
      ],
      [0, 0]
    );
}
