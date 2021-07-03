function factorial(num) {
  var factorial = 1;
  for (i = 1; i < num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

var item = factorial(6);
console.log(item);
