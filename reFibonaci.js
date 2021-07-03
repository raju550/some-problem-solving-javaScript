function reFibonaci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return reFibonaci(n - 1) + reFibonaci(n - 2);
  }
}
var result = reFibonaci(12);
console.log(result);
