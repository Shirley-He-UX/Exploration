var stars=[];
var hourHand;  
var minuteHand, secondHand;
var clockDiameter;
var angle =0.0;
var scalar = 1;
var speed = 0.24;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255,255,255-frameCount);
  textAlign(CENTER);
  textFont('Share Tech Mono');
  textSize(20);
  noStroke();
    s = new Hand(10, 320, 150, 2); 
  fill(255);
  frameRate(3000);
  
}
function draw(){
 background(255);
  push();
  colorMode(HSB);
  fill(0, 0, 0,0.9);
  noStroke();
  s.resetPosition(width/2, height/2);  
  s.spin(1.2);  
  stars[0] = new Star(180, 0); 
  stars[frameCount] = new Star(180, frameCount); 
  for (var i =0; i<stars.length; i++) {
    stars[i].setNumber(i+1);
    stars[i].setPosition(width/2,height/2,height*0.36,i);
    stars[i].blowUp(s);
    stars[i].fly();
    stars[i].displays();
  }
  
  pop();

    fill(28,100,208);
    text('What we still UNKNOWN',windowWidth/2,windowHeight/2);
    
}



function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function mousePressed()  {
    window.location.href="s9.html"; 
}

function Star(totalDialCount,thisIndex) {
  
  var curX = random(0,width);
  var curY = random(0,height);
  var xDirect = random(-1,1); 
  var yDirect = random(-1,1);
  
  var toX;
  var toY;
  var y;
  var myAngle; 
  var mySize = 20;
  var number;
  var totalDialCount=totalDialCount;
  var thisIndex=thisIndex;
  var fills;
  var bb=color('#1cc7d0');
  var aa=color(255);
  this.setNumber = function(num){
     number = num; 
  }
  
  this.setPosition = function (centerX, centerY, radius, count) {
    var centerX=centerX;
    var centerY=centerY;
    var radius=radius;
    var count=count;
    myAngle = 360*(thisIndex/totalDialCount)-60;
    toX = cos(radians(myAngle))*radius + centerX;
    toY = sin(radians(myAngle))*radius + centerY; 
  }
  
  this.fly = function(){
     if(curX<0 || curX>width){
      xDirect = -xDirect; 
     }
     if(curY<0 || curY>height){
       yDirect = -yDirect;
     }
     curX += xDirect;
     curY += yDirect;
     
  }
  
  this.moveToTarget=function(){
    
    curX += (toX-curX)*0.01;
    curY += (toY-curY)*0.01;
  }
  
  this.blowUp = function(hand){
    var h = hand;
    if(abs(myAngle+90-h.angle%360)<10){
      fills=bb
      mySize = 40;
    }else{
      fills=aa;
      mySize = 20;
    }
  }
   
  this.displays=function () {
      ellipse(curX,curY, mySize/4,mySize/4);

  }
}


function Hand(x,y,l,w) {   
  var x=x;
  var y=y;
  var w=w;
  var l=l;
  this.angle=0;  
  var r=255;
  var g=255;
  var b=255;
  var t=255;
  
  this.resetPosition=function(x, y){
   x = x;  
   y = y;   
  }
  
  this.spin = function(speed){      
   this.angle += speed;   
  }
  
  this.blink = function (stepDegree){
    var  stepDegree = stepDegree;
   if(round(this.angle % stepDegree) == 0){
     t= 255;
   }else{
     t = 50;
   }
   console.log(this.angle);
   if(round(this.angle%360) > 90 && round(this.angle%360)  < 180){
     b = 0;
   }else{
     b = 255;
   }
  }
  
 this.move =function( speed ){  
   var speed = speed;
   x+= speed;    
 }
 
 this.displays = function (){  
    push(); 
    translate(width/2,height/2); 
    rotate(radians(this.angle) ); 
    translate(0, -l/2); 
    rectMode(CENTER); 
    noStroke(); 
    fill(r, g, b, t);
    rect(0,0,w,l); 
    pop(); 
  }
} 
