//setup
function setup(){
    //video
    video = createCapture(VIDEO);
    video.size(550,500);
    //canvas
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    //Pose Net
    poseNet =  ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
// modelLoaded
function modelLoaded(){
  console.log(' pose Net initialised')
}
//draw
function draw(){
    background("#030bfc");
}
//gotposes
function gotPoses(results){
     if(results.length > 0){
        console.log("results");
     }
}
