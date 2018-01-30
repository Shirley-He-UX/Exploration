var cov=0;
var cnv;
function setup() {
  cnv=createCanvas(windowWidth,windowHeight);

  textAlign(CENTER);
  textFont('monospace');
}

function draw() {
  background('#222');
  textSize(width/24);
  fill('#1cc7d0');
  text('Move your mouse',width/2,height/2);
  // if(frameCount<256){
  //   cov=frameCount;
  // }else{cov=255}
  fill(0,cov);
  rect(0,0,width,height);
  if(cov>255){
    cov=frameCount;
    window.location.href="s2.html"; 
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function mouseMoved()  {
  cov++;
}
