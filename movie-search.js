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
  // $("button").on('click', formSubmitted);

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
  var ul= document.querySelector("#movies");

for (var i = 0; i < results.Search.length;i++) {
    var li= document.createElement("li")
    li.textContent = results.Search[i].Title;
    // li.textContent = results.Search[i].date;
    ul.appendChild(li);
    // console.log();
  }
}

// var body = document.querySelector("body");
// //   var button = document.createElement("button");
// //   button.setAttribute ("class", "button");
// //   button.textContent = "Sign up";
// //   nav.appendChild(button);
  // Access the array of movies:
  // results["Search"]
