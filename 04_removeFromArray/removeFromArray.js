const removeFromArray = function(arr, ...argRemoved) {
  return arr.filter(x => !argRemoved.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
