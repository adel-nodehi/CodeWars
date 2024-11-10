// Two Sum
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

// my way
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++)
    for (let j = i + 1; j < numbers.length; j++)
      if (numbers[i] + numbers[j] == target) return [i, j];
}

// another way
function twoSum(numbers, target) {
  const seen = new Map();

  return numbers.reduce((acc, num, i) => {
    const howMushLeftToTarget = target - num;

    if (seen.has(num)) return [seen.get(num), i];

    seen.set(howMushLeftToTarget, i);
    return acc;
  }, []);
}
