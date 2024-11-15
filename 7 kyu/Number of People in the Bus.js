// Number of People in the Bus
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// my way
const number = function (busStops) {
  return busStops.reduce((people, data) => people + data[0] - data[1], 0);
};

// other way
const number = function (busStops) {
  return busStops.reduce((people, [on, off]) => people + on - off, 0);
};
