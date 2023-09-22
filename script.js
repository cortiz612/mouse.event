var positionElement = document.getElementById("push");
var clickElement = document.getElementById("changeColorButton");
var animateElement = document.querySelector(".animation");

document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log("Mouse X: " + x + ", Mouse Y: " + y);
    positionElement.textContent = " X: " + x + ", Y: " + y;
});

clickElement.addEventListener("click", function() {
    animateElement.style.left = "-50px";
    animateElement.style.top = "-50px";
    animateElement.classList.add("animate");
});

document.addEventListener("click", function(event) {
    var newX = event.clientX - animateElement.clientWidth / 2;
    var newY = event.clientY - animateElement.clientHeight / 2;

    animateElement.style.transition = "all 0.3s ease";
    animateElement.style.transform = `translate(${newX}px, ${newY}px)`;
});

animateElement.addEventListener("mouseover", function() {
    animateElement.classList.add("animate2");
});

animateElement.addEventListener("animationend", function() {
    animateElement.classList.remove("animate2");
});

var toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function() {
    animateElement.classList.toggle("animate");

    if (animateElement.classList.contains("animate")) {
        animateElement.style.backgroundColor = getRandomColor();
    } else {
        animateElement.style.backgroundColor = "#ff5733";
    }
});

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
