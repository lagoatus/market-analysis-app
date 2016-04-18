// Create object constructor for photos of products
// MUCH OF THIS .JS FILE'S CONTENT IS VERY INFLUENCED OR COPYIED FROM MARK'S IN-CLASS HELP OF MY PROJECT
// 
// I ADDED SOME OF THE COUNT FUNCTIONS AT THE END, ALL OF THE STYLING, THE CONSTRUCTOR
//THE OBJECTS, THE CHART, AND I SIMPLIFIED A COUPLE FUNCTIONS.
var total = 0;
function photosObj (names, src) {
  this.names = names;
  this.id = names;
  this.label = names
  this.src = src;
  this.y = 0;
  };

// Array for Objects and their properties
var photosArray = new Array(); // new array with new objects pushed in
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


var cycledImgs = new Array (); // creates empty new array
var displayedImages = new Array ();

function makeArrayCopy() {
for (var i = 0; i < photosArray.length; i++) {
  cycledImgs.push(photosArray[i]); // empty array is populated by cycling original photos array with index
  } // this creates a copy of the main array without overwriting original array...
}

function randomPhoto() {
  if (cycledImgs.length == 0) {makeArrayCopy();
  }
    var i = Math.floor(Math.random() * cycledImgs.length);
    while (displayedImages.indexOf(cycledImgs[i].id) >= 0) {
    i = Math.floor(Math.random() * cycledImgs.length);
    alert("duplicate image avoided");
    }
    var photoToUse = cycledImgs.splice(i, 1)[0];// brackets to reference first item in array
  displayedImages.push(photoToUse.id);

    return photoToUse; // splice to remove a photo that has been used
  } // use availablePhotos for length so that it it taking from an array that is getting smaller
  // with each loop.

function displayImages() { // create function to show 3 images
  var placeHolder = document.getElementById('photos'); // get html id to place images in
  placeHolder.innerHTML = ""; // IMPORTANT; used to clear images
  displayedImages = new Array ();

  for (var index = 0; index < 3; index++) { // create for loop to run func 3 times for 3 images
    rnd = randomPhoto(); // random num generator with easy access var name
    var getPixs = photosArray[rnd] // random product images is selected and placed in this var
    var imageElement =  document.createElement("img"); // var is linked to the create a new element in html for the image
    imageElement.src = rnd.src; // new img element is equated to random object property /.jpg refer/
    imageElement.id = rnd.names; // same as above but instead the name to be used for id
    imageElement.addEventListener("click", registerClick);
    placeHolder.appendChild(imageElement);
  }
}
function registerClick() {
  // console.log("Image clicked");
  // console.log(event.target.src);

  var insert = document.getElementById('count');
  insert.innerHTML = "<p>"+(++total)+" /15 </p>";

  for (var index=0; index < photosArray.length; index++) {
    if (photosArray[index].names == event.target.id) {
      photosArray[index].y++;
      break; // stop loop
      }
    }
  displayImages();
  if (total > 14) {
    displayChart();}

      var stringY = JSON.stringify(photosArray); // usually placed inside the function

      localStorage.setItem('count', stringY);
}

displayImages();



var chart = null;
function displayChart() {

chart = new CanvasJS.Chart("chartContainer", {

          title: {text: "Clicks Per Photo"},
          data: [//array of dataSeries
            /*** Change type "column" to "bar", "area", "line" or "pie"***/
                  {
                   type: "column",
                   dataPoints: photosArray
                  }
                ]
         });

        chart.render();
        var newid = document.getElementById("photos");
        newid.id = "fade";

      }

function reset() {
  window.location.reload();
  showChart();

}

function showChart() {
  console.log("showing chart");
  displayChart();
  var newid = document.getElementById("photos");
  newid.id = "fade";

}

//Hello
// var retrieveIt = localStorage.getItem('count');// no parsing yet in this example
// console.log(retrieveIt);
//
// var parseIt = JSON.parse(retrieveIt); // now parse to see boolean correctly
// console.log(parseIt);
