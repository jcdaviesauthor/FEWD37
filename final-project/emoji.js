
//Event listener queery selector = $("")
var nounEvent = $(".noun");
$(".noun").on( "click", function showNouns (event){
  console.log( "click" );
  event.preventDefault();
  //what goes here? what is my function?
});

//from old homeworks
// Handle the form submission: go to OMDB and get results
// function formSubmitted(event) {
//   event.preventDefault();
//   var url = "https://omdbapi.com/?s=" + $("#query").val();
//   $.get(url, resultsReceived);
// }

//Create array for nouns
//how to link photos in an array? 
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
