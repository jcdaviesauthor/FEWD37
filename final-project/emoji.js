// $(#card).flip();
// Spining iPhone animation, starts on refresh
var titleImage = document.querySelector("#titleImage");
 console.log(titleImage);
titleImage.classList.add("spin");

  //When we click on anything with class noun show run function showNouns table
  var nounEvent = $(".noun");
  $(".noun").on( "click", showNouns);

  //Changing class of table from display none to displayed
  var clickedNounEl;
  function showNouns (event){
    $(".noun-table").addClass("tableOn");
  //keeping track of where in the story you clicked on
    clickedNounEl = event.target;
    console.log (clickedNounEl);
  };
  //When click on nouns inside the table run function chooseNouns
  $(".nounImg").on( "click", chooseNouns);

  function chooseNouns(nounEvent){
      //keeping track of what emoji they clicked on
      var imgClicked = nounEvent.target;
      // can also use: var $(this) = imgClicked;

      // console.log("the emoji you clicked is", imgClicked);
      // Use to clear all of the emojis of that part of speech, your way to clear only that part of speech
      //see clearTable below
      var tableClicked = $(imgClicked).parents('table');
      //clone/recreate the image in the spot on Story page to keep it in the table as well
      // NEED TO UPDATE TO JQUERY
      var clonedImg= document.createElement("img");
      //setting clones attribute of source to the to image string of the image clicked
      clonedImg.setAttribute("src", imgClicked.getAttribute("src"));
      //setting clones attribute to data-translation
      clonedImg.setAttribute("data-translation", imgClicked.getAttribute("data-translation"))

      //RESIZING EMOJI-setting clones classes so they will format coreectly with other emojis
      clonedImg.setAttribute("class", "emoji storyEmoji");
      // clonedImg.setAttribute("class", "storyEmoji");

      // Need these to get the data translation
      // clonedImg.setAttribute("data-translation", imgClicked.getAttribute("data-translation"));
      // clonedImg.setAttribute('class', 'madlib-emoji');
      //the noun we clicked has no text content, takes any the word noun
      clickedNounEl.textContent = "";

      //then we are appending the new cloned image right below the place that they clciked on the page
      clickedNounEl.appendChild(clonedImg);
      //then we are clearing the table when an emoji is chosen, see function below
      clearTable(tableClicked);
  };
//removed class tableOn (for all parts of speech)to hide each table after emoji is chosen
  function clearTable(displayedTable){
      displayedTable.removeClass("tableOn");
  }

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
        var tableClicked = $(imgVerbClicked).parents('table');

        // NEED TO UPDATE TO JQUERY
        var clonedVerbImg= document.createElement("img")
        clonedVerbImg.setAttribute("src", imgVerbClicked.getAttribute("src"))
        clonedVerbImg.setAttribute("data-translation", imgVerbClicked.getAttribute("data-translation"));
        clonedVerbImg.setAttribute('class', 'emoji storyEmoji');
        clickedVerbEl.textContent = "";
        clickedVerbEl.appendChild(clonedVerbImg);
        clearTable(tableClicked);
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
          var tableClicked = $(imgAdjectivesClicked).parents('table');
          console.log (tableClicked);
          // NEED TO UPDATE TO JQUERY
          var clonedAdjectiveImg= document.createElement("img")
          clonedAdjectiveImg.setAttribute("src", imgAdjectivesClicked.getAttribute("src"))
          clonedAdjectiveImg.setAttribute("data-translation", imgAdjectivesClicked.getAttribute("data-translation"))
          clonedAdjectiveImg.setAttribute("class", "emoji storyEmoji");
          clickedAdjectiveEl.textContent = "";
          clickedAdjectiveEl.appendChild(clonedAdjectiveImg);
          clearTable(tableClicked);
      };

// FOR LOOP to put translation on the page
// When click on translate button run function to replace ALL emojis
// var translateBtn = $("button");
// Event listener, one click of the "translate" button run the function replace emojis
// Could put a conditional to make them have to answer them all first
// $("button").on( "click", replaceEmojis);
//
// // translation function
// function replaceEmojis() {
//   //UPDATE TO JQUERY
//   //get parent, by selecting all of the objects with class storyEmoji
//   // ??? NOT SURE WHY YOU WOULD USE ALL VS REGULAR querySelector
//   // ??? NOT SURE about this one
//   var images = document.querySelectorAll(".storyEmoji");
//   //Fun through a for loop with the length of all of the images in teh table
//   for (var i = 0; i < images.length; i++) {
//     //find the image in the array and get is translation attribute
//   var eachEmojiName = images[i].getAttribute("data-translation");
//   console.log(eachEmojiName);
//   // add class emoji off
//   // images[i].style.display.none;
//   // finding the parent span for each of the Emoji images
// // This is going to be the container span
//   var spanContainer = images[i].parentNode;
//   images[i].setAttribute("class", "front");
// //create new span
//   var spanBack = document.createElement("span");
//   // Taking span giving it text content for right dtatd-translation
//   spanBack.textContent = eachEmojiName;
//   // Give span attribue of class back
//   spanBack.setAttribute("class", "back");
//   spanContainer.setAttribute("class", "container");
//   // Append class back to container right under image in html
//   spanContainer.appendChild(spanBack);
//
//   }
// }
