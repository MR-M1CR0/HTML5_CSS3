var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

// Draw Letter A
ctx.fillStyle = 'black';
ctx.font = 'bold 48px Algerian';
ctx.fillText('A', 10, 50);
ctx.fillText('A', 450, 480);

// Draw The Heart
// Translate to the center of the canvas
ctx.translate(c.width / 2, c.height / 2);

// Rotate 180 degrees (which is PI radians)
ctx.rotate(Math.PI);

// Translate back
ctx.translate(-c.width / 2, -c.height / 2);

// Draw left side of the heart
ctx.beginPath();
ctx.moveTo(250, 250);
ctx.bezierCurveTo(200, 200, 150, 300, 250, 350);

// Draw right side of the heart (mirrored)
ctx.moveTo(250, 250);
ctx.bezierCurveTo(300, 200, 350, 300, 250, 350);

ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();

// Draw the Triangle
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(250, 270);
ctx.lineTo(210, 190);
ctx.lineTo(290, 190);
ctx.closePath();
ctx.fill();
