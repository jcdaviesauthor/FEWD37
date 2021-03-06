
// Spining iPhone animation, starts on refresh
var titleImage = document.querySelector("#titleImage");
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

  };
  //When click on nouns inside the table run function chooseNouns
  $(".nounImg").on( "click", chooseNouns);

  function chooseNouns(nounEvent){
      //keeping track of what emoji they clicked on
      // can also use: var $(this) = imgClicked;
      var imgClicked = nounEvent.target;
      // Use to clear all of the emojis of that part of speech, the way to clear only that part of speech
      //see clearTable below
      var tableClicked = $(imgClicked).parents('table');
      //clone/recreate the image in the spot on story page to keep it in the table as well
      // NEED TO UPDATE TO JQUERY
      var clonedImg= document.createElement("img");
      //setting clones attribute of source to the image string of the image clicked
      clonedImg.setAttribute("src", imgClicked.getAttribute("src"));
      //setting clones attribute to data-translation
      clonedImg.setAttribute("data-translation", imgClicked.getAttribute("data-translation"))

      //Resizing: setting clones classes so they will format coreectly with other emojis
      clonedImg.setAttribute("class", "emoji storyEmoji");
      //the noun we clicked has no text content, takes away the word noun
      clickedNounEl.textContent = "";
      //then we are appending the new cloned image right below the place that they clicked on the page
      clickedNounEl.appendChild(clonedImg);

//This allows you to pick more than one emoji
      var parent = $(clonedImg).parent();
      if ($(clonedImg).parent().get(0).tagName==="IMG") {
        var grandParent = $(clonedImg).parents("SPAN");
        console.log("this is cnew parent", grandParent);
        // $(grandParent).append(clonedImg);
        $(parent).replaceWith(clonedImg);
        };

// Adding duplicate images in linked space
      if ($(clonedImg).parent().get(0).id==='noun1') {
        $("#noun1").clone().appendTo("#nounA");
        console.log($("#nounA").text());
        $("#wordNounA").remove();
      }
      if ($(clonedImg).parent().get(0).id==='noun2') {
        $("#noun2").clone().appendTo("#nounB");
        $("#wordNounB").remove();
      }

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

        var parent = $(clonedVerbImg).parent();
        if ($(clonedVerbImg).parent().get(0).tagName==="IMG") {
        var grandParent = $(clonedVerbImg).parents("SPAN");
        console.log("this is cnew parent", grandParent);
        $(parent).replaceWith(clonedVerbImg);
    };
        clearTable(tableClicked);
    };

    //ADJECTIVES
    var adjectiveEvent = $(".adjective");
    $(".adjective").on( "click", showAdjective);

      var clickedAdjectiveEl;
      function showAdjective (event){
        $(".adjective-table").addClass("tableOn");
        clickedAdjectiveEl = event.target;
      };

      $(".adjectiveImg").on("click", chooseAdjective);
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

          var parent = $(clonedAdjectiveImg).parent();

          if ($(clonedAdjectiveImg).parent().get(0).tagName==="IMG") {
            var grandParent = $(clonedAdjectiveImg).parents("SPAN");
            console.log("this is cnew parent", grandParent);
            $(parent).replaceWith(clonedAdjectiveImg);
            };

          clearTable(tableClicked);
      };

// For loop to put translation on the page
// When click on translate button run function to replace ALL emojis
$("button").on( "click", replaceEmojis);

// translation function
function replaceEmojis() {
  //UPDATE TO JQUERY
  //get parent, by selecting all of the objects with class storyEmoji
  var images = document.querySelectorAll(".storyEmoji");
  //Fun through a for loop with the length of all of the images in teh table

  for (var i = 0; i < images.length; i++) {
    //find the image in the array and get is translation attribute
  var eachEmojiName = images[i].getAttribute("data-translation");
  // finding the parent span for each of the Emoji images
// This is going to be the container span
  var spanContainer = images[i].parentNode;

// Removes Images
  $(images[i]).hide();

// We are going to put back to the card only if it doesnt already have a back
  if (spanContainer.querySelector(".back") == undefined) {
    var spanBack = document.createElement("span");
    // Taking span giving it text content for right dtatd-translation
    spanBack.textContent = eachEmojiName;
    // Give span attribue of class back
    spanBack.setAttribute("class", "back");
    // Give span attribue of class card
    spanContainer.setAttribute("class", "card");
    // Append class back to container right under image in html
    spanContainer.appendChild(spanBack);
    //see below: could use to translate another animation
    // spanContainer.querySelector("img").classList.add("explode")
  }
  }
}
