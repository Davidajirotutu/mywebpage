
var index = 0;
mobilPictures();

function mobilPictures() {
  var k;
  var images = document.getElementsByClassName("slideImages");
  for (k = 0; k < images.length; k++) {
    images[k].style.display = "none";
  }
  index++;
  if (index > images.length) {index = 1}
  images[index-1].style.display = "block";
  setTimeout(mobilPictures, 2000); // Change image every 2 seconds
}

