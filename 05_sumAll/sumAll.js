const sumAll = function(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    if (x >= 0 && y >= 0) {
      if (x > y) {
        let temp = x;
        x = y;
        y = temp;
      }

      let sum = 0;
      for (let i = x; i <= y; i++) {
        sum += i;
      }
      return sum;
    }
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
