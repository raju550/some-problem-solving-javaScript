var speech = "I am a ismail hossain. I am a     web developer";
var word = 0;
for (i = 0; i < speech.length; i++) {
  var element = speech[i];
  if (element == " " && speech[i - 1] != " ") {
    word++;
  }
}
console.log(word);
