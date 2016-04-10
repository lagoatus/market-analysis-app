function photosObj (names, src) {
  this.names = names;
  this.src = src;
  this.voteCount = 0;
  };

// Array for Objects and their properties
var photosArray = new Array();
photosArray.push(new photosObj ("bag", "bag.jpg"));
photosArray.push(new photosObj ("banana", "banana.jpg"));
photosArray.push(new photosObj ("scissors", "scissors.jpg"));
photosArray.push(new photosObj ("shark", "shark.jpg"));
photosArray.push(new photosObj ("sweep", "sweep.jpg" ));
photosArray.push(new photosObj ("boots", "boots.jpg"));
photosArray.push(new photosObj ("chair", "chair.jpg"));
photosArray.push(new photosObj ("pen", "pen.jpg"));
photosArray.push(new photosObj ("unicorn", "unicorn.jpg"));
photosArray.push(new photosObj ("usb", "usb.jpg"));
photosArray.push(new photosObj ("watercan", "watercan.jpg"));
photosArray.push(new photosObj ("wineglass", "wineglass.jpg"));
photosArray.push(new photosObj ("cthulhu", "cthulhu.jpg"));
photosArray.push(new photosObj ("dragon", "dragon.jpg"));


var firstImage = document.getElementById('pic1');
var secImage = document.getElementById('pic2');
var thirdImage = document.getElementById('pic3');

function randomPhoto() {
    return Math.floor(Math.random() * photosArray.length);
  }

function displayImages() {
    var div = document.getElementById('pic1');
    rnd = randomPhoto();
    var getPixs = photosArray[rnd]
    div.innerHTML += "<img src="+getPixs.src+">";
    var div = document.getElementById('pic2');
    rnd = randomPhoto();
    var getPixs = photosArray[rnd]
    div.innerHTML += "<img src="+getPixs.src+">";
    var div = document.getElementById('pic3');
    rnd = randomPhoto();
    var getPixs = photosArray[rnd]
    div.innerHTML += "<img src="+getPixs.src+">";
}

if (firstImage === secImage) {var div = document.getElementById('pic2');
  rnd = randomPhoto();
  var getPixs = photosArray[rnd]
  div.innerHTML += "<img src="+getPixs.src+">";
}

displayImages();
//
//
// firstImage.addEventListener('click', );
// secImage.addEventListener('click', );
// thirdImage.addEventListener('click', );

//
