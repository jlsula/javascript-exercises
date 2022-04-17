const sumAll = function (min, max) {
  let sum = 0;

  // If higher number is first, swap the locations
  if (min > max) {
    const tempMin = min;
    min = max;
    max = tempMin;
  }
  // If given number is negative, return error
  if (min < 0 || max < 0) {
    return "ERROR";
  }

  // If given parameter is not a integer, return error
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
