// Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// my way
function duplicateCount(text) {
  let lowerCaseText = text.toLowerCase();
  let duplicateCounter = 0;

  for (let i = 0; i < lowerCaseText.length; i++) {
    if (!lowerCaseText.slice(i + 1).includes(lowerCaseText[i])) continue;

    lowerCaseText = lowerCaseText.replaceAll(lowerCaseText[i], '');
    duplicateCounter++;
    i--;
  }

  return duplicateCounter;
}

// other way
function duplicateCount(text) {
  const lowerCaseText = text.toLowerCase();
  let duplicateCounter = 0;

  lowerCaseText.split('').reduce((used, word) => {
    if (used.includes(word) || lowerCaseText.split(word).length <= 2)
      return used;

    duplicateCounter++;
    return [...used, word];
  }, []);

  return duplicateCounter;
}
