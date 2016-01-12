
//Event listener queery selector = $("")
var nounEvent = $(".noun");
$(".noun").on( "click", showNouns);

  // inside this you need a click an event listener for when they click on "piggy"
  var clickedNounEl;
  function showNouns (event){
    $(".noun-table").addClass("tableOn");
    clickedNounEl = event.target;
  };

  $(".nounImg").on( "click", chooseNouns);
  function chooseNouns(nounEvent){
        //keeping track of what they clicked on
      var imgClicked = nounEvent.target
      console.log (imgClicked);

      var clonedImg= document.createElement("img")
      clonedImg.setAttribute("src", imgClicked.getAttribute("src"))

      clickedNounEl.textContent = "";
      clickedNounEl.appendChild(clonedImg);
  };

//Create array ("buckets") for nouns
//how to link photos in an array?
var nounArray =
  [
    {
      "path": "images/noun-emoji/noun-cactus.png",
      "translation": "Cactus"
    },

    {
      "path": "images/noun-emoji/noun-chick.png",
      "translation": "Chickadee"
    },

    {
      "path": "images/noun-emoji/noun-piggy.png",
      "translation": "Piggy"
    }
  ];
debugger

//Do same for verbs and adjectives
