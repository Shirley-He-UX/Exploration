
function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
    textSize(18);
  textFont('Share Tech Mono');
}

function draw() {
  background(0)
  noStroke();
  fill(28-frameCount,100-frameCount,208-frameCount);
  ellipse(width/2,height/2,height*3/4-frameCount*5);  
    
  if(frameCount>109){
  window.location.href="s4.html"; 
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
