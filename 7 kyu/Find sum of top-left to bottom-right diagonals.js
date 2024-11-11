// Find sum of top-left to bottom-right diagonals
// https://www.codewars.com/kata/5497a3c181dd7291ce000700

// my way
function diagonalSum(matrix) {
  return matrix.reduce((sum, _, index) => sum + matrix[index][index], 0);
}

// other way
function diagonalSum(matrix) {
  return matrix.reduce((sum, row, index) => sum + row[index], 0);
}
