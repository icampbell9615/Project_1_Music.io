$(document).ready(function () {

    var apiKey = "AIzaSyDYKIHRcJf1-jAmUGEYxfFzc3diC7EMZAc"
    var clientId = "511419356056-ekaaurigboo1sd8m9kl9ustbilp6b547.apps.googleusercontent.com"



    $("#youtube-search").on("click", function (event) {
        event.preventDefault();
        var inputVar = $("#search");
        console.log(inputVar.val().trim())
        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + inputVar.val().trim() + "&key=AIzaSyDYKIHRcJf1-jAmUGEYxfFzc3diC7EMZAc";
        youtube(queryURL);



    });

    function youtube(url) {
        $("#the-video").remove();
        $.ajax({
            url: url,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            var responseArray = response.items;
            for (var i = 0; i < responseArray.length; i++) {
                var itemToPrint = response.items[i].id.videoId;
                var idEndpoint = response.items[i].id;
                if (idEndpoint.hasOwnProperty("videoId") === true) {
                    console.log(itemToPrint);
                    var crazy = $("<iframe width='560' height='315' src='https://www.youtube.com/embed/' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
                    crazy.attr("id", "the-video");
                    crazy.attr("src", "https://www.youtube.com/embed/" + itemToPrint);
                    $("#player").append(crazy); {
                        break;
                    }
                }



            };

        });
    };

    $("#next").on("click", function () {
        var clicked = true;
    })








})