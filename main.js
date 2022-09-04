function setup()
{
    canvas= createCanvas(400,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
} 

function take_snapshot()
{
    save("filter_image.png");
}

function draw()
{
    image(video,0,0,400,400);
    tint(tint_colour)
}

tint_colour="";

function filter_tint()
{
    tint_colour=document.getElementById("colour").value;
}