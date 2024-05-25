document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("background-video");
  video.addEventListener("loadedmetadata", function () {
    video.playbackRate = 0.5; // Set playback speed to 0.5x
  });
});

function smoothScrollToSection(sectionId) {
  var target = $("#" + sectionId);
  if (target.length) {
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      2000
    );
    return;
  }
}

const arrowOnClickHandler = () => {
  console.log(window.scrollY);
  if (window.scrollY == 0) {
    smoothScrollToSection("home");
  } else if (window.scrollY >= 80 && window.scrollY < 1154) {
    smoothScrollToSection("about");
  } else if (window.scrollY >= 1154 && window.scrollY < 2130) {
    smoothScrollToSection("projects");
  } else if (window.scrollY >= 2130 && window.scrollY < 3106) {
    smoothScrollToSection("skills");
  } else if (window.scrollY >= 3106 && window.scrollY < 4082) {
    smoothScrollToSection("contact");
  }
};
