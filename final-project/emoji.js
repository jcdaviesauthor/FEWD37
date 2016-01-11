

var nounEvent = document.querySelector(",noun");
nounEvent.addEventListener ("click", playD);
function playD (event){
  console.log(event)
  howl.play("D")
}
//Create array for nouns
//how to link photos in an array? What is the code?
var nounArray = {
  // "Search"????:
  [
    {
      "path": <img src = "final-project/images/noun-emoji/noun-cactus.png">,
      "translation": "Little Piggy",
    }
  ]
}

// var verbArray = {
//   // "Search"????:
//   [
//     {
//       "path": <img src = "final-project/images/noun-emoji/noun-cactus.png">,
//       "translation": "Little Piggy",
//     }
//   ]
// }
//
// var adjectiveArray = {
//   // "Search"????:
//   [
//     {
//       "path": <img src = "final-project/images/noun-emoji/noun-cactus.png">,
//       "translation": "Little Piggy",
//     }
//   ]
// }
