var tracksArray = []
$(document).ready(function () {

    function userArtist(userArtist) {
        $("#artist-input").val("").attr("placeholder", "Search");
        var tracksArray = [];
        $("div").remove("#swag");
        var APIKey = "6bd260e771ce2f1a6e020fe365f4537c";
        var queryURL = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + userArtist + "&api_key=6bd260e771ce2f1a6e020fe365f4537c&format=json";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var tracks = response.toptracks.track

            console.log(response);

            for (var i = 0; i < 5; i++) {
                var topTracks = tracks[i].name;
                console.log(topTracks);
                tracksArray.push(topTracks)
                console.log(tracksArray)
                var info = $("<div>")
                // info.append($("<button>").attr("class", "fm-yt-search"));
                var infoButtons = $("<button>").attr("class", "fm-yt-search");
                $(infoButtons).attr("trackname", topTracks);
                info.append(infoButtons)
                $(info).append(topTracks);
                $(info).attr("id", "swag");
                $("#results").append(info);
                
                // console.log(thisIndex);
                
                
            };
               
            $(".fm-yt-search").on("click", function (event) {
                event.preventDefault();
                
                var inputVar = $.trim($(this).attr("trackname"));
                console.log(inputVar)

                var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + inputVar + "&key=AIzaSyDYKIHRcJf1-jAmUGEYxfFzc3diC7EMZAc";
                youtube(queryURL);

                function youtube(url) {
                    $("#the-video").remove();
                    $.ajax({
                        url: url,
                        method: "GET"
                    }).then(function (response) {
                        console.log(response)

                        var responseId = response.items[0].id.videoId
                        var crazy = $("<iframe width='560' height='315' src='https://www.youtube.com/embed/' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
                        crazy.attr("id", "the-video");
                        crazy.attr("class", "iframe")
                        crazy.attr("src", "https://www.youtube.com/embed/" + responseId);

                        $("#player").append(crazy);
                    });
                };
            })


        });
    }

    // Event handler for user clicking the select-artist button
    $("#select-artist").on("click", function (event) {

        // Preventing the button from trying to submit the form
        event.preventDefault();

        // Storing the artist name
        var inputArtist = $("#artist-input").val().trim();

        //Pass artist as argument
        userArtist(inputArtist);


    });

})