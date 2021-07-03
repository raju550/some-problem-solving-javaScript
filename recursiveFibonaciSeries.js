function seriesFibonaci(n) {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  } else {
    var fibo = seriesFibonaci(n - 1);
    var nextElement = fibo[n - 1] + fibo[n - 2];
    fibo.push(nextElement);
    return fibo;
  }
}
var result = seriesFibonaci(12);
console.log(result);
