const findTheOldest = function(arr) {
  return arr.reduce((a, b) => {
    const currentYear = new Date().getFullYear();
    const ageA = a.yearOfDeath != undefined 
      ? a.yearOfDeath - a.yearOfBirth
      : currentYear - a.yearOfBirth;
    const ageB = b.yearOfDeath != undefined 
      ? b.yearOfDeath - b.yearOfBirth
      : currentYear - b.yearOfBirth;
    return ageA > ageB ? a : b;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
