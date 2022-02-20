img = "";
status = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Input";
}

function preload() {
    img = loadImage('dog_cat.jpg')
}

function draw() {
    image(img, 0,0, 640,420);
    fill("black");
    text("Dog", 45,75);
    noFill();
    stroke("black");
    rect(30, 60, 450, 350);
    fill("red");
    text("Cat", 300, 120);
    noFill();
    stroke("cyan");
    rect(300, 100, 450, 350);
}

function modelLoaded() {
    console.log("Modal Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}