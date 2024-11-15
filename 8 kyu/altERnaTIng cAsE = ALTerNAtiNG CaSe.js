// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// https://www.codewars.com/kata/56efc695740d30f963000557

// my way
String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(char =>
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    )
    .join('');
};

// other way
String.prototype.toAlternatingCase = function () {
  let str = '';
  console.log(this.length);

  for (let i = 0; i < this.length; i++)
    str +=
      this[i] === this[i].toLowerCase()
        ? this[i].toUpperCase()
        : this[i].toLowerCase();

  return str;
};
