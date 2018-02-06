var timer=350;
var colors=[];

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER);
  textSize(18);
  background(0);
  push();
  fill(255);
  ellipse(windowWidth/2,windowHeight/2,windowHeight*3/4);
  pop();
  textFont('Share Tech Mono');
  var w = 20;
       var int=setInterval(function(){ 
            var fills 
            =color(30,0,10+w/3);
            colors.push(fills);
            fill(fills);
            arc(0,0, height*3/4, height*3/4, w-20, w);
            w+=20;     
            if(w>360+360){
              int=window.clearInterval(int); 
            }
      }, 120);
}

function draw() {
    noStroke();
    ellipse(windowWidth);
    translate(width/2,height/2);
    if(frameCount>=timer ){
      background(28,100,208);
      rotate(frameCount-timer);
      for(var i=0;i<colors.length;i++){
        fill(colors[i]);
        arc(0,0, height*3/4*frameCount/timer, height*3/4*frameCount/timer, i*20, (i+1)*20);
      }    
    }
    if(frameCount>=240){
       background(2,frameCount-240);
       
       fill(28,100,208,frameCount-320);
       ellipse(0,0,height*3/4);
       
       if(frameCount>=575){
         window.location.href="s4.html"; 
       }
    }
    
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
