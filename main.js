function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);
    
    canvas = createCanvas(550 , 490);
    canvas.position(550 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    background('#f0b24f');
}

function modelLoaded()
{
    console.log("poseNet is loaded");
}

function gotPoses(results)
{
    if(results)
    {
        console.log(results);
    }
}