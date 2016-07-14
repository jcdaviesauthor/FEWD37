
//use the buttons- need 4
var buttonStop= document.querySelector(".buttonStop");
var buttonSlow= document.querySelector(".buttonSlow");
var buttonGo= document.querySelector(".buttonGo");
// var buttonCaution= document.querySelector(".buttonCaution");

buttonStop.addEventListener ("click", fButtonStop);
buttonSlow.addEventListener ("click", fButtonSlow);
buttonGo.addEventListener ("click", fButtonGo);
// buttonCaution.addEventListener ("click", fButtonCaution);

var stopLightRed= document.querySelector(".circleTopOn");
var stopLightYellow= document.querySelector(".circleMiddleOn");
var stopLightGreen= document.querySelector(".circleBottomOn");

function fButtonStop (event) {
console.log("this works red");
resetTurnGrey();
// reset func here
stopLightRed.classList.remove("stopLightOff");
}

function fButtonSlow (event) {
console.log("this works yellow");
resetTurnGrey();
// reset func here
stopLightYellow.classList.remove("stopLightOff");
}

function resetTurnGrey (){
  console.log("this reset to grey works");
  stopLightRed.classList.add("stopLightOff");
  stopLightYellow.classList.add("stopLightOff");
  stopLightGreen.classList.add("stopLightOff");
}

//caution function
// function fButtonCaution (event) {
// console.log("this Caution works");
// resetTurnGrey();
// //toggle function here?
// stopLightYellow.setInterval(toggleSlow, 1000);
// stopLightCaution.classList.remove("stopLightOff");
// }
//
// function toggleSlow (){
//   stopLightYellow.classList.add("stopLightOff");
//
// }

function fButtonGo (event) {
console.log("this works");
resetTurnGrey();
// reset func here
stopLightGreen.classList.remove("stopLightOff");
}
