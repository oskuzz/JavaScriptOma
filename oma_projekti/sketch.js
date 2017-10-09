var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("upperSlider");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function popupMatrix() {
    var popup = document.getElementById("popupMatrix");
    popup.classList.toggle("show");
}

function popupMine() {
    var popup = document.getElementById("popupMine");
    popup.classList.toggle("show");
}

function popupPath() {
    var popup = document.getElementById("popupPath");
    popup.classList.toggle("show");
}

function popupSmart() {
    var popup = document.getElementById("popupSmart");
    popup.classList.toggle("show");
}

function popupSnake() {
    var popup = document.getElementById("popupSnake");
    popup.classList.toggle("show");
}
