canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function myMouseDown(e)
{
color = document.getElementById("color").value;
widthLine = document.getElementById("widthLine").value;
radius = document.getElementById("radius").value;
MouseEvent = "mouseDown";
}
function mouseMove(e)
{
 positionMouseX = e.clientX - canvas.offsetLeft;
 positionMouseY = e.clientY - canvas.offsetTop;

 if(MouseEvent == "mouseDown") 
 {
 console.log("Current position of x and y coordinates = ");
 console.log("x = " + PositionMouseX + "y = " + PositionMouseY );
 ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.lineWidth = widthLine;
 ctx.arc(positionMouseX, PositionMouseY, radius, 0, 2 *Math.PI);
 ctx.strokeStyle();
 }
}