// This is what the data returning from IMDB will look like:
var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "https://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
}

function resultsReceived(results) {
  // Try putting a debugger here and inspecting the results argument
  // debugger;
  // The array of movies lives inside results["Search"]
  // See the sampleResult above for an example
  var $ul = $("#movies");

for (var i = 0; i < results.Search.length;i++) {
      var $div = $("<div>");
      var $img = $("<img>");
      //do i need to replace with jQuery??
      var Poster = results.Search[i].Poster;
      img.attr("src", Poster);

      var $li = $("<li>")
      $li.text(results.Search[i].Title);
      var $li2 = $("<li>")
        //need to change to jQuery
      li2.textContent = results.Search[i].Year;
      $ul.append($div);
      $div.append($img);
      $div.append($li);
      $div.append($li2);

  }
  // ul.reset();
}

//Need to reset the fields

// function resetField(){
//   console.log("this reset works");
//   stopLightRed.classList.delete("stopLightOff");
// }
// $('#movie-search-form')[0].reset();
