var number = [50, 30, 70, 60, 30, 50, 60, 30];
var uniqueName = [];
for (i = 0; i < number.length; i++) {
  var element = number[i];
  var index = uniqueName.indexOf(element);
  if (index == -1) {
    uniqueName.push(element);
  }
}
console.log(uniqueName);
