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
function narcissistic(value) {
  return (
    String(value)
      .split('')
      .map((num, _, numbersArr) => num ** numbersArr.length)
      .reduce((acc, num) => acc + num, 0) === value
  );
}
