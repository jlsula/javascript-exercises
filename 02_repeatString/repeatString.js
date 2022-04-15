const repeatString = function (string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
