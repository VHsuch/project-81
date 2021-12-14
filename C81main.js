
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth =2;
ctx.arc(150 , 200 , 30 , 0 ,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth =2;
ctx.arc(225 , 200 , 30 , 0 ,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth =2;
ctx.arc(300 , 200 , 30 , 0 ,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth =2;
ctx.arc(265 , 250 , 30 , 0 ,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth =2;
ctx.arc(185 , 250 , 30 , 0 ,2*Math.PI);
ctx.stroke();