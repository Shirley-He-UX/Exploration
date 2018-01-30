var count=0;
function setup() {
  cnv=createCanvas(windowWidth,windowHeight);

  textAlign(CENTER);
  textFont('monospace');
  scale(10);
}

function draw() {
  background('#222');
  fill(255);
  textSize(width/40);
  noStroke();
  fill('#1cc7d0');
  text('Drag your ball to cross the line',width/2,height*9/10);
  if(count<170){
  ellipse(map(mouseX,0,width,0,width/2),height/2,height*3/4);
  }
  stroke('#1cc7d0');
  strokeWeight(4);
  line(width*3/5,0,width*3/5,height);
  if(mouseX>width*19/20){
    count++;
    if(count>160){
      ellipse(width*4/5,height/2,height/4);
    }
    if(count>200){
      window.location.href="s8.html"; 
    }
  }

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

