function userArtist(userArtist){
    var APIKey = "6bd260e771ce2f1a6e020fe365f4537c";
    var userArtist = "tupac"
    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + userArtist + "&api_key=6bd260e771ce2f1a6e020fe365f4537c&format=json";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    
      console.log(response);
   
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

