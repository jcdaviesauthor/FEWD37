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
  // debugger;
  // The array of movies lives inside results["Search"]
  // See the sampleResult above for an example
  var ul= document.querySelector("#movies");

for (var i = 0; i < results.Search.length;i++) {
      var div = document.createElement("div");
      var img = document.createElement("img");
      var Poster = results.Search[i].Poster;
      console.log(Poster);
      img.setAttribute ("src", Poster);

      var li2 = document.createElement("li")
      li2.textContent = results.Search[i].Year;
      var li = document.createElement("li")
      li.textContent = results.Search[i].Title;

      ul.appendChild(div);
      div.appendChild(img);
      div.appendChild(li2);
      div.appendChild(li);


  }
  // #movies.reset();
}

//Need to reset the fields

// function resetField(){
//   console.log("this reset works");
  // stopLightRed.classList.delete("stopLightOff");
// }
// $('#movie-search-form')[0].reset();
