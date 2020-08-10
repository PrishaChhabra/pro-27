class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':0.8,
      }
      
      this.radius=radius;
      this.body=Bodies.circle(this.x, this.y, (this.radius)/2, options)
      
      Matter.Body.setStatic(this.body,false);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      
      
      fill("pink");
    
      ellipse(0,0,this.radius,this.radius)
      pop();
    }
  };



  