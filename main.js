function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(1000,150);

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function gotPoses(){
    if (results.length>0){
        console.log(results);
    }
}

function draw(){
    background("#e95566");
}

function modelLoaded(){
    console.log("Model has been loaded");
}