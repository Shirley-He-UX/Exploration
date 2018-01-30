
function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textFont('monospace');
}

function draw() {
  background('#222')
  noStroke();
  fill(28,199,208);
 
  if(mouseIsPressed){
      textSize(width/40);
     fill(255);
     text('Move your mouse to the top to explore MORE',width/2,height/8);
     fill(28,199,208);
     ellipse(width/2,height*5/6,height*2/5,height/10);
      fill(28,199,208,120);
     ellipse(width/2,height*3/5,height*3/5,height/6);
      fill(28,199,208,40);
      ellipse(width/2,height/3,height,height/4);
      
  }else{
     ellipse(width/2,height/2,height*3/4);
  }
  if(mouseY<0 && mouseIsPressed){
     window.location.href="s5.html"; 
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}