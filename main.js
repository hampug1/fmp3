noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;


function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 550);
canvas.position(560, 100);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("PoseNet is initialized!!");
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
    }
}
function draw(){
    background("purple");
    textSize(difference);
    fill("white");
    document.getElementById("text").innerHTML = "The size of the text is " + difference + "px";
    text("Hamish", noseX, noseY)
}
