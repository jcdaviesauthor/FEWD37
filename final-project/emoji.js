//add NOUNS table to page, add append verbs to
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

      // need to update to jquery
      var clonedImg= document.createElement("img")
      clonedImg.setAttribute("src", imgClicked.getAttribute("src"))

      clickedNounEl.textContent = "";
      clickedNounEl.appendChild(clonedImg);
  };

  //add VERB table to page, add append verbs to
  //Event listener query selector = $("")
  var verbEvent = $(".verb");
  $(".verb").on( "click", showVerbs);

    // inside this you need a click an event listener for when they click on "piggy"
    var clickedVerbEl;
    function showVerbs (event){
      $(".verb-table").addClass("tableOn");
      clickedVerbEl = event.target;
    };

    $(".verbImg").on( "click", chooseVerb);
    function chooseVerb(verbEvent){
          //keeping track of what they clicked on
        var imgClicked = verbEvent.target
        console.log (imgClicked);

        // need to update to jquery
        var clonedImg= document.createElement("img")
        clonedImg.setAttribute("src", imgClicked.getAttribute("src"))

        clickedVerbEl.textContent = "";
        clickedVerbEl.appendChild(clonedImg);
    };

    //add ADJECTIVES table to page, add append verbs to
    //Event listener query selector = $("")
    var adjectiveEvent = $(".adjective");
    $(".adjective").on( "click", showAdjective);

      // inside this you need a click an event listener for when they click on "piggy"
      var clickedAdjectiveEl;
      function showAdjective (event){
        $(".adjective-table").addClass("tableOn");
        clickedAdjectiveEl = event.target;
      };

      $(".adjectiveImg").on( "click", chooseAdjective);
      function chooseAdjective(adjectiveEvent){
            //keeping track of what they clicked on
          var imgClicked = adjectiveEvent.target
          console.log (imgClicked);

          // need to update to jquery
          var clonedImg= document.createElement("img")
          clonedImg.setAttribute("src", imgClicked.getAttribute("src"))

          clickedAdjectiveEl.textContent = "";
          clickedAdjectiveEl.appendChild(clonedImg);
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
      "path": "images/noun-emoji/noun-monkey.png",
      "translation": "Monkey"
    },

    {
      "path": "images/noun-emoji/noun-piggy.png",
      "translation": "Piggy"
    },

    {
      "path": "images/noun-emoji/noun-shit.png",
      "translation": "Shit"
    },

  ];
// debugger

//Do same for verbs and adjectives
