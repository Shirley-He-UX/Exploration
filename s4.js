function setup() {
  cnv=createCanvas(windowWidth,windowHeight);
   background(0);
  textAlign(CENTER);
    textSize(18);
  textFont('Share Tech Mono');
}

function draw() {
  background(0);
  noStroke();
 fill(255);
  text('Choose another circle to fill',width/2,height/2);

  if(frameCount>100){
     
     fill(28,100,208,frameCount);
     for(var x=1;x<10;x++){
            for(var y=1;y<10;y++){
             if(x*width/10-width/40<mouseX && mouseX<x*width/10+width/40 && y*height/10-width/40<mouseY && mouseY<y*height/10+width/40){
               fill(28,100,208);
             }else{
               fill(28,100,208,40);
             }
             ellipse(x*width/10,y*height/10,width/40);
        }
     }
  }else{
     fill(28,100,208,frameCount/2);
     for(var i=1;i<10;i++){
             for(var j=1;j<10;j++){
             ellipse(i*width/10,j*height/10,width/40);
        }
     }
  }


}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function mousePressed()  {
  window.location.href="s6.html"; 
}
