var slideIndex = 0;
var secondSlideIndex = 0;
carousel();
carousell();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Yampa");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function carousell() {
    var r;
    var y = document.getElementsByClassName("Colorado");
    for (r = 0; r < y.length; r++) {
      y[r].style.display = "none";
    }
    secondSlideIndex++;
    if (secondSlideIndex > y.length) {secondSlideIndex = 1}
    y[secondSlideIndex-1].style.display = "block";
    setTimeout(carousell, 2000); // Change image every 2 seconds
  }