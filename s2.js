var imgs=[];
var num;
var count=0;
function setup() {
  var cnv = createCanvas(windowWidth,windowHeight);
  cnv.position(0,0);
  background('#222');
  cnv.style('z-index',-10);
  for(var i=0;i<13;i++){
    imgs[i]=createImg('images/second'+i+'.svg');
    imgs[i].position(0,0);
    imgs[i].style('opacity',0);
    imgs[i].size(height*3/4,height*3/4);
    imgs[i].position(width/2-height*3/8,height/8);
    
  }
  textAlign(CENTER);
  textFont('monospace');
}

function draw() {
  textSize(22);
  fill(255);
   text('Click to finish the circle',width/2,height/2);
      if(count>12){
    window.location.href="s3.html"; 
    }

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function mousePressed(){   
    if(count>=12){
       window.location.href="s3.html"; 
    }
    imgs[round(count)].style('opacity',1);
    count+=0.6;
}
