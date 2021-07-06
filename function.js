function evenify(num) {
  if (num % 2 == 0) {
    return num;
  } else {
    result = num * 2;
  }
  return result;
}
var result = evenify(11);
var squire = result * result;
console.log("Result", squire);
function evenify_all(nums) {
  var array_even = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    var result = evenify(num);
    array_even.push(result);
  }
  return array_even;
}
nums = [5, 12, 89, 18, 8];
var array = evenify_all(nums);
console.log(array);
