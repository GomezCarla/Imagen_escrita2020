var angulo = 0.0;
var angulo2 = 0.3;
var desplazamiento= 60;
var escalar= 40;
var escalar2= 90;
var velocidad= 0.3;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  rectMode(CENTER);

}

function draw() {
  background(220);

   //5
   var y1 = desplazamiento + sin(angulo) * escalar;
   var y2 = desplazamiento + sin(angulo + 0.4) * escalar;
   var y3 = desplazamiento + sin(angulo + 0.8) * escalar;
   var x1 = desplazamiento + sin(angulo) * escalar;
   var x2 = desplazamiento + sin(angulo + 0.4) * escalar;
   var x3 = desplazamiento+40 + sin(angulo + 0.7) * escalar;
   var y4 = desplazamiento+100 + sin(angulo + 0.7) * escalar;
   var y5 = desplazamiento+140 + sin(angulo + 0.8) * escalar;
   var y6 = desplazamiento+180 + sin(angulo + 0.7) * escalar;
   var x4 = desplazamiento+30 + sin(angulo + 0.5) * escalar;
   var x5 = desplazamiento-5 + sin(angulo + 0.5) * escalar;
   ellipse( 100, y1, 40, 40);
   ellipse( 140, y2, 40, 40);
   ellipse( 180, y3, 40, 40);
   ellipse( x1, 140, 40, 40);
   ellipse( x2, 180, 40, 40);
   ellipse( x3, 180, 40, 40);
   ellipse( 175, y4, 40, 40);
   ellipse( 185, y5, 40, 40);
   ellipse( 170, y6, 40, 40);
   ellipse( x4, 280, 40, 40);
   ellipse( x5, 260, 40, 40);
   
   angulo +=velocidad;
   
   //0
   let step = frameCount % 15;
   translate(400, 200);
   // Equivalent to scale(x, y);
   applyMatrix(1 / step, 1, 1, 1 / step, 0, 8);
   ellipse( 0, 0, 200, 200);
   fill(220)
   ellipse( 0, 0, 130, 130);
   
}