function Ball() {  this.color = '#008CBA';}Ball.prototype.draw = function(context) {  context.save();  context.translate(this.x, this.y);  context.fillStyle = this.color;  context.beginPath();  //x, y, radius, start_angle, end_angle, anti-clockwise  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);  context.closePath();  context.fill();  context.restore();};var balls = [];var ball;ball = new Ball();ball.color = '#F04124';ball.radius = avg * 10;ball.x = (canvas.width / 2);ball.y = (canvas.height / 2);ball.vx = Math.random() * (2 * avg + 1) - avg;ball.vy = Math.random() * (2 * avg + 1) - avg;balls.push(ball);var numBalls = 100for (var ball, i = 0; i < (numBalls - 1); i++) {  ball = new Ball();  ball.radius = avg * 10;  ball.x = Math.random() * (canvas.width + 1);  ball.y = Math.random() * (canvas.height + 1);  ball.vx = Math.random() * (2 * avg + 1) - avg;  ball.vy = Math.random() * (2 * avg + 1) - avg;  balls.push(ball);}function checkWalls (ball) {  if (ball.x + ball.radius >= canvas.width) {    ball.x = canvas.width - ball.radius;    ball.vx *= -1.0;  } else if (ball.x - ball.radius <= 0) {    ball.x = ball.radius;    ball.vx *= -1.0;  }  if (ball.y + ball.radius >= canvas.height) {    ball.y = canvas.height - ball.radius;    ball.vy *= -1.0;  } else if (ball.y - ball.radius <= 0) {    ball.y = ball.radius;    ball.vy *= -1.0;  }}function rotate(x, y, sin, cos, reverse) {  return {    x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),    y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)  };}function checkCollision(ball0, ball1) {  var dx = ball1.x - ball0.x,  dy = ball1.y - ball0.y,  dist = Math.sqrt(dx * dx + dy * dy);  //collision handling code here  if (dist < ball0.radius + ball1.radius) {    //calculate angle, sine, and cosine    var angle = Math.atan2(dy, dx),        sin = Math.sin(angle),        cos = Math.cos(angle),        //rotate ball0's position        pos0 = {x: 0, y: 0}, //point        //rotate ball1's position        pos1 = rotate(dx, dy, sin, cos, true),        //rotate ball0's velocity        vel0 = rotate(ball0.vx, ball0.vy, sin, cos, true),        //rotate ball1's velocity        vel1 = rotate(ball1.vx, ball1.vy, sin, cos, true);        //collision reaction, swap the two velocities    var temp = vel0;        vel0 = vel1;        vel1 = temp;    //update position - to avoid objects becoming stuck together    var absV = Math.abs(vel0.x) + Math.abs(vel1.x),        overlap = (ball0.radius + ball1.radius) - Math.abs(pos0.x - pos1.x);    pos0.x += vel0.x / absV * overlap;    pos1.x += vel1.x / absV * overlap;    //rotate positions back    var pos0F = rotate(pos0.x, pos0.y, sin, cos, false),        pos1F = rotate(pos1.x, pos1.y, sin, cos, false);    //adjust positions to actual screen positions    ball1.x = ball0.x + pos1F.x;    ball1.y = ball0.y + pos1F.y;    ball0.x = ball0.x + pos0F.x;    ball0.y = ball0.y + pos0F.y;    //rotate velocities back    var vel0F = rotate(vel0.x, vel0.y, sin, cos, false),        vel1F = rotate(vel1.x, vel1.y, sin, cos, false);    ball0.vx = vel0F.x;    ball0.vy = vel0F.y;    ball1.vx = vel1F.x;    ball1.vy = vel1F.y;    var chance = Math.random()    if (ball0.color == '#F04124' && ball1.color != '#F04124') {      if (ball1.color == '#43AC6A') {        if (chance <= 0.07) ball1.color = '#F04124';      } else {        if (chance <= 0.9) ball1.color = '#F04124';      };    };    if (ball1.color == '#F04124' && ball0.color != '#F04124') {      if (ball0.color == '#43AC6A') {        if (chance <= 0.07) ball0.color = '#F04124';      } else {        if (chance <= 0.9) ball0.color = '#F04124';      };    };  }}function move(ball){  ball.x += ball.vx;  ball.y += ball.vy;  checkWalls(ball);}function draw(ball){  ball.draw(context);}