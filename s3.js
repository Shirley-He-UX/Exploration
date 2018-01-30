var timer=140;
var colors=[];
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER);
  background('#222');
  textFont('monospace');
  var w = 20;
       var int=setInterval(function(){ 
            var fills =color(50,random(155,255),random(155,255));
            colors.push(fills);
            fill(fills);
            arc(0,0, height*3/4, height*3/4, w-20, w);
            w+=20;     
            if(w>360){
              int=window.clearInterval(int); 
            }
      }, 120);
}

function draw() {
    noStroke();
    translate(width/2,height/2);
    if(frameCount>=timer ){
      background('#222');
      rotate(frameCount-timer);
      for(var i=0;i<colors.length;i++){
        fill(colors[i]);
        arc(0,0, height*3/4*frameCount/timer, height*3/4*frameCount/timer, i*20, (i+1)*20);
      }    
    }
    if(frameCount>=240){
       background(2,frameCount-240);
       
       fill(28,199,208,frameCount-320);
       ellipse(0,0,height*3/4);
       
       if(frameCount>=575){
         window.location.href="s4.html"; 
       }
    }
    
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}