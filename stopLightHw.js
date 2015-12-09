
//use the buttons- need 4
var buttonStop= document.querySelector(".buttonStop");
var buttonSlow= document.querySelector(".buttonSlow");
var buttonGo= document.querySelector(".buttonGo");
var buttonCaution= document.querySelector(".buttonCaution");

buttonStop.addEventListener ("click", fButtonStop);
// buttonSlow.addEventListener ("click", fButtonSlow);
// buttonGo.addEventListener ("click", fButtonGo);
// buttonCaution.addEventListener ("click", fButtonCaution);

function fButtonStop (event) {
console.log("this works");

// reset func here

var stopLightRed= document.querySelector(".circleTopOn");
stopLightRed.classList.remove("stopLightOff");
}

//
// //now use the traffic lights - need 3
// var redLightOn = document.querySelector()


// var dKey = document.querySelector("#d");
// dKey.addEventListener ("click", playD);
// function playD (event){
//   howl.play("D")
// }
