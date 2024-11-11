// Check the exam
// https://www.codewars.com/kata/5a3dd29055519e23ec000074

// my way
function checkExam(keys, array2) {
  const totalScore = array2.reduce((totalScore, answer, i) => {
    if (answer === '') return totalScore;
    if (answer === keys[i]) return totalScore + 4;
    return totalScore - 1; // in case of wrong answer
  }, 0);

  return totalScore > 0 ? totalScore : 0;
}

// other way
function checkExam(keys, array2) {
  const totalScore = array2.reduce((totalScore, answer, i) => {
    return totalScore + (answer === keys[i] ? 4 : answer ? -1 : 0);
  }, 0);

  return Math.max(totalScore, 0);
}
