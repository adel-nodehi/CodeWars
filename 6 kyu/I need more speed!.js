// I need more speed!
// https://www.codewars.com/kata/55de9c184bb732a87f000055

// my way
function reverse(arr) {
  for (let i = 0, j = arr.length - 1; i !== j && i <= j; i++, j--) {
    const temporary = arr[i];
    arr[i] = arr[j];
    arr[j] = temporary;
  }
}

// other way
function reverse(arr) {
  for (let left = 0; left < (arr.length - 1) / 2; left++) {
    let right = arr.length - 1 - left;

    const temporary = arr[right];
    arr[right] = arr[left];
    arr[left] = temporary;
  }
}
