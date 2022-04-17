const removeFromArray = function (...args) {
  // First item in arguments is the array
  var array = args[0];

  // new array
  var newArray = [];

  // forEach to loop through the array
  array.forEach((item) => {
    // push elements into the array, unless its included in the arguments
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
