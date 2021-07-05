function reverseString(str) {
  var reverse = "";
  for (i = 0; i < str.length; i++) {
    var char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}
var statement = "hllo bangladesh people";
var result = reverseString(statement);
console.log(result);
