// Simple Fun #317: Coordinate Helper
// https://www.codewars.com/kata/5936107d40ed69ea1e00003d

// my way
function coordinateHelper(commands) {
  return commands.reduce(
    ([x, y], cmd) => {
      const steps = +cmd.slice(1);

      if (!steps) return [x, y]; // is steps are not valid => return

      if (cmd.startsWith('A')) return [x - steps, y];
      if (cmd.startsWith('D')) return [x + steps, y];
      if (cmd.startsWith('S')) return [x, y - steps];
      if (cmd.startsWith('W')) return [x, y + steps];

      return [x, y];
    },
    [0, 0]
  );
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
