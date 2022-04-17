const ftoc = function (faren) {
  var result = Math.round((faren - 32) * (5 / 9) * 10) / 10;
  return result;
};

const ctof = function (celcius) {
  var result = Math.round((celcius * (9 / 5) + 32) * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
