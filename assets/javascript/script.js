function userArtist(userArtist){
    var APIKey = "6bd260e771ce2f1a6e020fe365f4537c";
    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + userArtist + "&api_key=6bd260e771ce2f1a6e020fe365f4537c&format=json";
    
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
        var tracks = response.toptracks.track
        
        console.log(response);

for (var i = 0; i < 5; i++){

    var topTracks = tracks[i].name;
    console.log(topTracks);
    var info = $("<div>")

    $(info).append(JSON.stringify(topTracks))
    $(info).attr("id", "swag")
    $("#article-section").append(info)
 delete(info);
    
}





   });
}
    
    
       


        // Event handler for user clicking the select-artist button
      $("#select-artist").on("click", function(event) {

        // Preventing the button from trying to submit the form
        event.preventDefault();

        // Storing the artist name
        var inputArtist = $("#artist-input").val().trim();
    
      //Pass artist as argument
        userArtist(inputArtist);
      

        
       

        
  });

        

    
