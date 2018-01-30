function setup() {
  cnv=createCanvas(windowWidth,windowHeight);
   background('#222');
  textAlign(CENTER);
  textFont('monospace');
}

function draw() {
  background('#222');
  noStroke();
 textSize(width/40);
 fill(255);
  text('Click Your Dot',width/2,height*8/9);

  if(frameCount>100){
     
     fill(28,199,208,frameCount);
     for(var x=1;x<30;x++){
            for(var y=1;y<100;y++){
             if(x*width/30-width/120<mouseX && mouseX<x*width/30+width/120 && y*height/30-width/120<mouseY && mouseY<y*height/30+width/120){
               fill(28,199,208);
             }else{
               fill(28,199,208,40);
             }
             ellipse(x*width/30,y*height/30,width/120);
        }
     }
  }else{
     fill(28,199,208,frameCount/2);
     for(var i=1;i<30;i++){
             for(var j=1;j<30;j++){
             ellipse(i*width/30,j*height/30,width/120);
        }
     }
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function mousePressed()  {
  
  setTimeout(function(){
    window.location.href="s7.html"; 
  }, 1400);
  
}