var count=0;
var num = 2; 
var springs = []; 


function setup() {
  cnv=createCanvas(windowWidth,windowHeight);
  springs[0] = new Spring(width/4, height/2, width/3, 0.98, 12.0, 0.1, springs, 0); 
	springs[1] = new Spring(width*3/4, height/2, 0, 0.6, 9.0, 0.1, springs, 1); 
  
  textAlign(CENTER);
  textFont('Share Tech Mono');
  scale(10);
}

function draw() {
  
  background(0);
  fill(255);
  noStroke();
	for (var i = 0; i < num; i++) {
		springs[i].update(); 
		springs[i].displays();
	}
  fill(255);
  textSize(18);
  text('Drag your circle to cross the line',width/3,height*14/15);
  fill(28,100,208);
  push();
  stroke(225);
  strokeWeight(4);
  line(width*3/5,0,width*3/5,height);
  pop();
 if(count>6){
      springs[1].size=width/20;
      springs[1].x_pos=width*3/4;
      springs[0].size=0;
    if(count>8){
      window.location.href="s7.html"; 
    }
  }
}


function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function mousePressed() {
	for (var i = 0; i < num; i++) { 
		springs[i].pressed();
	}
	count++;
}

function mouseReleased() {
	for (var i = 0; i < num; i++) { 
		springs[i].released();
	}
}


// Spring class
function Spring (_x, _y, _s, _d, _m, _k_in, _others, _id) {

	this.x_pos = _x;
	this.y_pos= _y;

	this.size = 20;
	this.size = _s; 

	this.over = false; 
	this.move = false; 

	this.mass = _m;       // Mass 
	this.k = 0.2;    // Spring constant 
	this.k = _k_in;
	this.damp = _d;       // Damping 
	this.rest_posx = _x;  // Rest position X 
	this.rest_posy = _y;  // Rest position Y 


	this.velx = 0.0;   // X Velocity 
	this.vely = 0.0;   // Y Velocity 
	this.accel = 0;    // Acceleration 
	this.force = 0;    // Force 

	this.friends = _others;
	this.id = _id;

	this.update = function() {

		if (this.move) { 
			this.rest_posy = mouseY; 
			this.rest_posx = mouseX;
		}

		this.force = -this.k * (this.y_pos - this.rest_posy);  // f=-ky 
		this.accel = this.force / this.mass;                 // Set the acceleration, f=ma == a=f/m 
		this.vely = this.damp * (this.vely + this.accel);         // Set the velocity 
		this.y_pos = this.y_pos + this.vely;           // Updated position 


		this.force = -this.k * (this.x_pos - this.rest_posx);  // f=-ky 
		this.accel = this.force / this.mass;                 // Set the acceleration, f=ma == a=f/m 
		this.velx = this.damp * (this.velx + this.accel);         // Set the velocity 
		this.x_pos = this.x_pos + this.velx;           // Updated position 


		if ((this.overEvent() || this.move) && !(this.otherOver()) ) { 
			this.over = true;
		} else {
			this.over = false;
		}
	} 

	this.overEvent = function() {
		var disX = this.x_pos - mouseX;
		var disY = this.y_pos - mouseY;
		var dis = createVector(disX, disY);
		if (dis.mag() < this.size/2 ) {
			return true;
		} else {
			return false;
		}
	}

	// Make sure no other springs are active
	this.otherOver = function() {
		for (var i=0; i < num; i++) {
			if (i != this.id) {
				if (this.friends[i].over == true) {
					return true;
				}
			}
		}
		return false;
	}

	this.displays = function() { 
		if (this.over) { 
			fill(255);
		} else { 
				fill(28,100,208);
		} 
		ellipse(this.x_pos, this.y_pos, this.size, this.size);
	} 

	this.pressed = function() { 
		if (this.over) { 
			this.move = true;
		} else { 
			this.move = false;
		}
	} 

	this.released = function() { 
		this.move = false; 
		this.rest_posx = this.y_pos;
		this.rest_posy = this.y_pos;
	}
};
