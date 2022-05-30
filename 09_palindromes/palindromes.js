const palindromes = function(str) {
  const parsed = str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s/g, '')
    .toLowerCase();
  const reversed = parsed.split('').reverse().join('');
  return parsed === reversed;
}

// Do not edit below this line
module.exports = palindromes;