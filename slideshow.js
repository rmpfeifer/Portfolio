let i = 0;
function changeSlide(x) {
    let slides = [document.getElementById("s1"), document.getElementById("s2")]
    i += x;
    i = i % 2;
    slides.forEach(clear);
    slides[i].style.display = "block";
}

function clear(elem) {
elem.style.display = "none";
}
