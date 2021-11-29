z=[];
function preload() {
    load_image="bedroom.jpg"
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.position(700,300);

    loading_model= ml5.objectDetector("cocossd", modelHasLoaded);
document.getElementById("status").innerHTML="Status: Patience Is key...";
}

function modelHasLoaded() {
    console.log("Cocossd is a buiscuit's name");
    status1=true;
    loading_model.detect(hold_image, recieve_result);
}
function recieve_result(error,result) {
    if (error) {
        console.log(error);
    }
    else {
      console.log(result);
        z=result;
    }
    }

function draw() {
    image(video, 0, 0, 600, 600);
}
