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
document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projects-container");
  const githubUsername = "thetalog"; // Replace with your GitHub username
  const githubProjectsUrl = `https://api.github.com/users/${githubUsername}/repos`;

  fetch(githubProjectsUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const projectName = document.createElement("h3");
        projectName.textContent = project.name;
        projectDiv.appendChild(projectName);

        const projectDescription = document.createElement("p");
        projectDescription.textContent =
          project.description || "No description provided.";
        projectDiv.appendChild(projectDescription);

        const projectLink = document.createElement("a");
        projectLink.textContent = "View on GitHub";
        projectLink.href = project.html_url;
        projectLink.target = "_blank";
        projectDiv.appendChild(projectLink);

        fetch(`${project.url}/readme`)
          .then((response) => response.json())
          .then((readme) => {
            const readmeContent = atob(readme.content);
            const readmeElement = document.createElement("div");
            // readmeElement.innerHTML = `<h4>README.md</h4><pre>${readmeContent}</pre>`;
            projectDiv.appendChild(readmeElement);
          });

        projectsContainer.appendChild(projectDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching GitHub projects:", error);
    });
});
