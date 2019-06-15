function userArtist(userArtist){
    var APIKey = "6bd260e771ce2f1a6e020fe365f4537c";
    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + userArtist + "&api_key=6bd260e771ce2f1a6e020fe365f4537c&format=json";
    
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
        var tracks = response.toptracks.track
        console.log(response);

 // Constructing HTML containing the artist information
 for (var i = 0; i < 1; i++) {
 var artistName = tracks[0];
 console.log(artistName);
 var info = $("<div>")
 $("#article-section").append(info).attr("id", "swag")

 
 //  $("#swag").append(JSON.stringify(artistName));
 var trackResponse = artistName.image[3]["#text"];
 $("#swag").append(trackResponse);
 
 var imgElement = $("<img>");
 $(imgElement).attr("src", trackResponse);
 $(imgElement).attr("alt", "No image found artist");
 $("body").append(imgElement);
 
 
 }
//  var artistURL = $("<a>").attr("href", response.url).append(artistName);
//  var artistImage = $("<img>").attr("src", response.thumb_url);
//  var trackerCount = $("<h2>").text(response.tracker_count + "");
//  var upcomingEvents = $("<h2>").text(response.upcoming_event_count + "");
//  var goToArtist = $("<a>").attr("href", response.url).text("");

 // Empty the contents of the artist-div, append the new artist content
//  $("#artist-div").empty();
//  $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);


     
   });
 }
    
    
       


        // Event handler for user clicking the select-artist button
      $("#select-artist").on("click", function(event) {

        // Preventing the button from trying to submit the form
        event.preventDefault();

        // Storing the artist name
        var inputArtist = $("#artist-input").val().trim();
    
        // Running the function(passing in the artist as an argument)
        userArtist(inputArtist);
        
      });

