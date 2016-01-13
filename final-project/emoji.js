  //When we click on anything with class noun show run function showNouns table
  var nounEvent = $(".noun");
  $(".noun").on( "click", showNouns);

  //Changing class of table from display none to displayed
  var clickedNounEl;
  function showNouns (event){
    $(".noun-table").addClass("tableOn");
    clickedNounEl = event.target;
  };
//When click on nouns inside the table run function chooseNouns
  $(".nounImg").on( "click", chooseNouns);
  function chooseNouns(nounEvent){
      //keeping track of what they clicked on
      var imgClicked = nounEvent.target
      console.log (imgClicked);

      //clone/recreate the image in the spot on the page because we want it to remain in the table as well
      // NEED TO UPDATE TO JQUERY
      var clonedImg= document.createElement("img")
      //setting attribute to image
      clonedImg.setAttribute("src", imgClicked.getAttribute("src"))
      //the noun we clicked has no text content
      clickedNounEl.textContent = "";
      //then we are appending the new cloned image to the page
      clickedNounEl.appendChild(clonedImg);
  };

  //VERB
  var verbEvent = $(".verb");
  $(".verb").on( "click", showVerbs);

    var clickedVerbEl;
    function showVerbs (event){
      $(".verb-table").addClass("tableOn");
      clickedVerbEl = event.target;
    };

    $(".verbImg").on( "click", chooseVerb);
    function chooseVerb(verbEvent){
        var imgVerbClicked = verbEvent.target
        console.log (imgVerbClicked);

        // NEED TO UPDATE TO JQUERY
        var clonedVerbImg= document.createElement("img")
        clonedVerbImg.setAttribute("src", imgVerbClicked.getAttribute("src"))

        clickedVerbEl.textContent = "";
        clickedVerbEl.appendChild(clonedVerbImg);
    };

    //add ADJECTIVES
    var adjectiveEvent = $(".adjective");
    $(".adjective").on( "click", showAdjective);

      var clickedAdjectiveEl;
      function showAdjective (event){
        $(".adjective-table").addClass("tableOn");
        clickedAdjectiveEl = event.target;
      };

      $(".adjectiveImg").on( "click", chooseAdjective);
      function chooseAdjective(adjectiveEvent){
          var imgAdjectivesClicked = adjectiveEvent.target
          console.log (imgAdjectivesClicked);

          // NEED TO UPDATE TO JQUERY
          var clonedAdjectiveImg= document.createElement("img")
          clonedAdjectiveImg.setAttribute("src", imgAdjectivesClicked.getAttribute("src"))

          clickedAdjectiveEl.textContent = "";
          clickedAdjectiveEl.appendChild(clonedAdjectiveImg);
      };

//Create array ("buckets") for nouns
var nounArray =
  [
    {
      "path": "images/noun-emoji/noun-cactus.png",
      "translation": "Cactus"
    },

    {
      "path": "images/noun-emoji/noun-chick.png",
      "translation": "Chick"
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

//Do same array for verbs and adjectives

//FOR LOOP to put translation on the page
//When click on translate button run function to replace ALL emojis
// var translateBtn = $("button");
// //or is it replace emojis????
// $("button").on( "click", replaceNouns);
//
// function replaceNouns() {
//   //should this be path??? or class noun?
//   var $span= $("path");
//
//   for (var i = 0; i < nounArray.length;i++) {
//         // var nounTranslation = document.createElement("span")
//         span.textContent = nounArray[i].translation;
//         // append translation to span with
//         span.appendChild(translation);
//   }
