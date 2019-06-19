$(document).ready(function(){

    
        var apiKey = "AIzaSyDYKIHRcJf1-jAmUGEYxfFzc3diC7EMZAc"
        var clientId = "511419356056-ekaaurigboo1sd8m9kl9ustbilp6b547.apps.googleusercontent.com"
        
        
        
        $("#youtube-search").on("click", function(event){
            event.preventDefault();
            var inputVar = $("#search");
            console.log(inputVar.val().trim())
            var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + inputVar.val().trim() + "&key=AIzaSyDYKIHRcJf1-jAmUGEYxfFzc3diC7EMZAc";
            youtube(queryURL);
            
            
            
            function youtube(url) {
                $("#the-video").remove();
                $.ajax({
                    url: url,
                    method: "GET" 
                }) .then(function(response){
                    console.log(response)
                    
                    var responseId = response.items[0].id.videoId
                    var crazy = $("<iframe width='560' height='315' src='https://www.youtube.com/embed/' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
                    crazy.attr("id", "the-video");
                    crazy.attr("src", "https://www.youtube.com/embed/" + responseId);
                    
                    $("#player").append(crazy);
                });
            };
        })
        


















}) 