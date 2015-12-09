
//use the buttons- need 4
var buttonStop= document.querySelector(".buttonStop");
var buttonSlow= document.querySelector(".buttonSlow");
var buttonGo= document.querySelector(".buttonGo");
var buttonCaution= document.querySelector(".buttonCaution");

buttonStop.addEventListener ("click", fButtonStop);
buttonSlow.addEventListener ("click", fButtonSlow);
buttonGo.addEventListener ("click", fButtonGo);
// buttonCaution.addEventListener ("click", fButtonCaution);

function fButtonStop (event) {
console.log("this works");

// reset func here
// document.getElementById("myForm").reset();

var stopLightRed= document.querySelector(".circleTopOn");
stopLightRed.classList.remove("stopLightOff");
}

function fButtonSlow (event) {
console.log("this works");

// reset func here

var stopLightYellow= document.querySelector(".circleMiddleOn");
stopLightYellow.classList.remove("stopLightOff");
}

function fButtonGo (event) {
console.log("this works");

// reset func here
//caution function
var stopLightCaution= document.querySelector(".circleMiddleOn");
stopLightCaution.classList.remove("stopLightOff");
}
function fButtonGo (event) {
console.log("this works");

// reset func here

var stopLightGreen= document.querySelector(".circleBottomOn");
stopLightGreen.classList.remove("stopLightOff");
}
