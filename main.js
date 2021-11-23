noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://lh3.googleusercontent.com/proxy/v34K9mf1p2Yl0zFhaRrZIYR3OwZIyHkMyxNPvSauGfXpBM9Z7M1gF1b_BU_mgqGU6Z4WhjrIuvUnDZMECintGluBo4oo70UiZwenTPfo5equrlRiB9CGYEEUM9PeTVOlrF_Ymu8WMTOOTE0');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x -25;
    noseY = results[0].pose.nose.y -15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 60, 60);
}

function take_snapshot(){    
  save('Moustache.png');
}
