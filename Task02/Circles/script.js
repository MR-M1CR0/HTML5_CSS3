var btn = document.getElementById('btn');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var color = document.getElementById('color');

btn.addEventListener('click', function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing new circles

  var numCircles = Math.floor(Math.random() * 50) + 20; // Generate a random number of circles

  for (var i = 0; i < numCircles; i++) {
    var radius = 30;
    var x = Math.random() * (canvas.width - radius * 2) + radius; // Random x position
    var y = Math.random() * (canvas.height - radius * 2) + radius; // Random y position

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = color.value;
    ctx.stroke();
    ctx.closePath();
  }
});
