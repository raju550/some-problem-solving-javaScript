function call_back(name, age, task) {
  console.log("Name", name);
  console.log("Age:", age);
  task();
}
function handWash() {
  console.log("pls go to wash room and clean your hand and face");
}
function wash() {
  console.log("pls wash your all body i mean safe your body");
}
call_back("Md ismail Hossain", 22, handWash);
call_back("Hossain", 13, wash);
