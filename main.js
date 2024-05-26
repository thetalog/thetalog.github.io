document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("background-video");
  video.addEventListener("loadedmetadata", function () {
    video.playbackRate = 0.5; // Set playback speed to 0.5x
  });
});
