canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "";
canvas.addEventListener("mousedown", myMouseDown);
canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mouseup", MouseUp);
canvas.addEventListener("mouseleave", MouseLeave);

function myMouseDown(e)
{
color = document.getElementById("color").value;
widthLine = document.getElementById("widthLine").value;
radius = document.getElementById("radius").value;
mouseEvent = "mouseDown";
}
function mouseMove(e)
{
 positionMouseX = e.clientX - canvas.offsetLeft;
 positionMouseY = e.clientY - canvas.offsetTop;

 if(mouseEvent == "mouseDown") 
 {
 console.log("Current position of x and y coordinates = ");
 console.log("x = " + positionMouseX + "y = " + positionMouseY );
 ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.lineWidth = widthLine;
 ctx.arc(positionMouseX, positionMouseY, radius, 0, 2 *Math.PI);
 ctx.stroke();
 }
}
function MouseUp(e)
{
  mouseEvent = "mouseup";
}
function MouseLeave(e)
{
   mouseEvent = "mouseleave";
}