

function setup() {
  cnv=createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textFont('Share Tech Mono');
   angleMode(DEGREES);
}

function draw() {
  background(0);
  noStroke();
 textSize(18);
 fill(255);
  text('You did it',width/2,height/2);
  text('You know a little bit more than others',width/2,height*1.2/3);
  fill(28,100,208);
  
  ellipse(width/2,height/2-height/19,5);
  
  stroke(255);
  strokeWeight(1);
  noFill();
  ellipse(width/2,height*4/5,windowHeight*2.1/3);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function mousePressed()  {
    window.location.href="s8.html"; 
}
