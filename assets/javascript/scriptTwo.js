function myCurrentSong(myCurrentSong) {
var queryURL = "https://www.youtube.com/embed?listType=search&list=" + myCurrentSong;
    

    
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  
      var myCurrentSong = response.myCurrentSong.song
      
      console.log(response);

for (var i = 0; i < 5; i++){

  var topSong = myCurrentSong[i].name;
  console.log(myCurrentSong);
  var music = $("<div>")

  $(music).append(JSON.stringify(topSong))
  $(music).attr("id", "swag")
  $("#next-song").append(music)
delete(music);
  
}





 });
}
  
  
     


      // Event handler for user clicking the select-artist button
    $("#youtube-search").on("click", function(event) {

      // Preventing the button from trying to submit the form
      event.preventDefault();

      // Storing the artist name
      var inputSong = $("#youtube-search").val().trim();
  
    //Pass artist as argument
      myCurrentSong(inputSong);
    

      
     

      
});

      

  


// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.'M7lc1UVf-VE',
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'DLPp2GicyY4',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        player.mute();
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      //var done = false;
      function onPlayerStateChange(event) {
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        //   setTimeout(stopVideo, 6000);
        //   done = true;
        // }
        if(event.data === 0) {          
              getNext();  
        }
        
        if(event.data === 2){
          //alert('You paused video');
          $('#myModal').modal('show');
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

      function getNext() {
        player.loadVideoById(myCurrentSong[myCurrentVideo +1]);
        myCurrentVideo++;
        if(myCurrentVideo >= myCurrentSong.length){
          myCurrentVideo = -1;
        }
      }
