

function setup() {
  cnv=createCanvas(windowWidth,windowHeight);
   background('#222');
  textAlign(CENTER);
  textFont('monospace');
   angleMode(DEGREES);
}

function draw() {
  background('#222');
  noStroke();
 textSize(width/40);
 fill(255);
  text('Here is YOU',width/2,height/2);
  fill(28,199,208);
  ellipse(width/2,height/2-height/20,5);

  push();
   var num=52;
   var dots=80;
   var siz=14;
   translate(width/2,height/2);
   for(var j=0;j<dots;j++){
      rotate(180/num);
      for(var i=0;i<num;i++){
        rotate(360/num);
        fill(28,199,208,40);
        ellipse(siz*6+siz*j,0,abs(2+siz*sin(0+180*j/dots)));
        }
  }
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function mousePressed()  {
    window.location.href="s9.html"; 
}