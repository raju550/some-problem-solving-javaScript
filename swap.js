var a = 5;
var b = 7;
console.log("Before swap value : ", "a=", a, "b=", b);
var temp = a;
a = b;
b = temp;
console.log("Before swap value : ", "a=", a, "b=", b);

//second proces

var x = 5;
var y = 6;
x = x + y;
y = x - y;
x = x - y;

console.log("Before swap value : ", "x=", x, "y=", y);

var x = 5;
var y = 6;
[x, y] = [y, x];
console.log("Before swap value : ", "x=", x, "y=", y);
