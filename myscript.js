document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Button clicked!");
    });
});

function changeImage(image) {
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    image.classList.add("active");
  }
  