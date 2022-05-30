const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
	return arr.reduce((a, b) => a * b, 1);
};

const power = function(x, power) {
	return x ** power;
};

const factorial = function(x) {
  if (x <= 0) {
    return 1;
  }
  let sum = 1;
	while (x > 0) {
    sum *= x;
    x -= 1;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
