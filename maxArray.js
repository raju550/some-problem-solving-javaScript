var studentResult = [90, 10, 70, 90, 90, 55, 70, 60, 91, 60];

var max = studentResult[0];
var low = studentResult[0];
for (i = 0; i < studentResult.length; i++) {
  var element = studentResult[i];
  if (max < element) {
    max = element;
  } else if (low > element) {
    low = element;
  }
}
console.log("Highest is mark:", max);
console.log("lowest is mark:", low);
