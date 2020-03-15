/*
function setup() { // !!! replace void !!!
  createCanvas(400, 400); // !!!replace size(width, height); !!!!
}

function draw() { // !!! replace void !!!
  var cx = map(mouseX, 0, width, 0, 255); // !!! replace float !!!
  var cy = map(mouseY, 0, height, 0, 255); // !!! replace float !!!
  var nsize = width/8+cos(mouseY*PI/180)*width/16; // !!! replace float !!!
  // 基本型
  fill(cx,cy,150,50);
  circle(mouseX,mouseY,nsize);
}
*/
window.onload = function(){
    // create a p5j object
    // under concept of class
    // sketch 1
	var brushSketch = function(p5j){
		// inital of p5j(processing) structure
		// add all function with p5j header
		p5j.setup = function(){
          p5j.createCanvas(250, 250);
        }
        // update of sketch
        p5j.draw = function(){
          var cx = p5j.map(p5j.mouseX, 0, p5j.width, 0, 255); // !!! replace float !!!
  		  var cy = p5j.map(p5j.mouseY, 0, p5j.height, 0, 255); // !!! replace float !!!
          var nsize = p5j.width/8+p5j.cos(p5j.mouseY*p5j.PI/180)*p5j.width/16; // !!! replace float !!!
  		  // 基本型
  		  p5j.fill(cx,cy,150,50);
  		  p5j.circle(p5j.mouseX,p5j.mouseY,nsize);
        }
	}

	// sketch 2
	var oopSketch = function(p5j){
		// class to call
    	// use this to call itself
        var Mover = function(nx,ny,nxspeed,nyspeed){
			this.x=nx;
			this.y=ny;
			this.xspeed=nxspeed;
			this.yspeed=nyspeed;
			this.rule1 =function() {
      			this.x=this.x+this.xspeed;
      			this.y=this.y+this.yspeed;
      			p5j.ellipse(this.x,this.y,16,16);
   			}
   			this.rule2 = ()=>{
      			if ((this.x>p5j.width) || (this.x<0)){
         			this.xspeed = -1 * this.xspeed;
      			}
      			if ((this.y>p5j.height) || (this.y<0)){
         			this.yspeed = -1 * this.yspeed;
      			}
   			}
   			this.update = ()=>{
   				this.rule1();
   				this.rule2();
   			}

		}
		var a,b,c;
		// inital of p5j(processing) structure
		// add all function with p5j header
		p5j.setup = function(){
          p5j.createCanvas(250, 250);
          a = new Mover(100,100,2,1);
          b = new Mover(150,200,-2,1);
          c = new Mover(80,150,2,-1);
        }
        // update of sketch
        p5j.draw = function(){
        	p5j.background(50,50,50);
        	a.update();
        	b.update();
        	c.update();
        }


		
	}

	

	// create sketch
	
	var firstSketch = new p5(brushSketch, 'firstSketch');
    var secondSketch = new p5(oopSketch, 'secondSketch');
    var secondSketch = new p5(brushSketch, 'thirdSketch');
    
}

