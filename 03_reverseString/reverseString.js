const reverseString = function(string) {
  return string.split("").reduce((a, b) => b + a, "");
};

// Do not edit below this line
module.exports = reverseString;
