const reverseString = function (string) {
  // Reversing string
  // 1. split string ["H", "E", "L", "L", "0"]
  // 2. reverse array ["O", "L", "L"; "E"; "H]
  // 3. join all elements of array into a string "OLLEH"
  return string.split("").reverse().join("");
};

reverseString("HELLO");
// Do not edit below this line
module.exports = reverseString;
