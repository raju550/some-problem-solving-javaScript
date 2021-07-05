// //feetToMile 1
// "use strict";
const ps = require("prompt-sync");
const prompt = ps();
// function feetToMile(feet) {
//   const mile = 0.000189394;
//   if (feet > 0) {
//     var total = mile * feet;
//     console.log("this is your total mile", total);
//   } else {
//     console.log("this is nagative number,not convert ");
//   }
// }
// var feet = prompt("Please enter your Mile number:");

// feetToMile(feet);
// woodCalculator

// function woodCalculator(totalChair, totalTable, totalBed) {
//   const chair = 1.5;
//   const table = 4.5;
//   const bed = 7.5;
//   if (totalChair > 0 && totalTable > 0 && totalBed > 0) {
//     const totalChairFeet = totalChair * chair;
//     const totalTableFeet = totalTable * table;
//     const totalBedFeet = totalBed * bed;
//     const totalWoodNeed = totalChairFeet + totalTableFeet + totalBedFeet;
//     console.log("Total chair feet:", totalChairFeet, "ft");
//     console.log("Total table feet:", totalTableFeet, "ft");
//     console.log("Total bed feet:", totalBedFeet, "ft");
//     console.log("We need total wood:", totalWoodNeed, "ft");
//   } else {
//     console.log("not allow negative value");
//   }
// }
// var totalChair = prompt("Please enter your total chair number:");
// var totalTable = prompt("Please enter your total table number:");
// var totalBed = prompt("Please enter your total bed number:");

// woodCalculator(totalChair, totalTable, totalBed);
// var tinyFriends = ["raju", "rofiq", "ll", "fjhdrt"];

// var tinyName = tinyFriends[0];
// for (i = 1; i < tinyFriends.length; tinyFriends++) {
//   var name = tinyFriends[i];
//   if (tinyName.length > name.length) {
//     tinyName = name;
//   }
// }
// console.log(tinyName);
function tinyFriend(arr) {
  var tiny = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (tiny.length > element.length) {
      tiny = element;
    }
  }
  return tiny;
}

var friend = ["abir", "abdullah", "robin", "abdurrohim", "ali"];
var smallFrind = tinyFriend(friend);
console.log(smallFrind);
