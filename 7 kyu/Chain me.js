// Chain me
// https://www.codewars.com/kata/54fb853b2c8785dd5e000957

// my way
function chain(input, fs) {
  return fs.reduce((parameter, curFunction) => curFunction(parameter), input);
}

// other way
function chain(input, fs) {
  let result = input;

  for (let i = 0; i < fs.length; i++) result = fs[i](result);

  return result;
}
