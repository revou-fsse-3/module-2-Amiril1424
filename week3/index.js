// Function to give alert when click submit
function myFunction() {
    alert("Thank You for Joining Us!");
}

function ubahMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 2) {
        counter = 1;
    }
}, 5000);


const initSlider = () => {

    const slideButtons = document.querySelectorAll(".slider .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(button);
            // const direction = button.id === "prev-slide" ? -1 : 1;
            // const scrollAmount = slide.clientWidth * direction;
            // slides.scrollBy({ left: scrollAmount, behavior: "smooth" });

        });
    });
}

window.addEventListener("load", initSlider);