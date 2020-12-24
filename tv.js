
img = "";
objects = [];
status = "";

function preload()
{
  //img = loadImage('8.jpg');
}


function setup() {
  canvas = createCanvas(500, 450);
  video = createCapture(VIDEO);
  video.size(500,450);
  video.hide();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() 
{
  console.log("Model Loaded!")
  status = true;
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw() {
 
  //write else-code block after the if-block (we already have stored the select tag value in variable "mode")
//inside the else-block write code to draw the image loaded in preload() function on canvas using image() function of p5.js and code to detect the object using detect() function of ml5.js
  
     
       
      if(status != "")
      {
        image(video, 0, 0, 500, 450);
        objectDetector.detect(video, gotResult);
        r =  random(255);
        g =  random(255);
        b =  random(255);
        document.getElementById("status").innerHTML = "Status : Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;      
        for (i = 0; i < objects.length; i++) {
     
 
          fill(r,g,b);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
}





