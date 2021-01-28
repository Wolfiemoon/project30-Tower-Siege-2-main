class Baseclass{
    constructor(x,y,width,height,options) {
      var options = {
          'restitution':0.8,
          //isStatic: true,
          'friction':1.0,
          'density':1.0
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x=x
      this.y=y
      this.width = width;
      this.height = height;
      this.Visibility =255
      World.add(world, this.body);
    }
    display(){  
      //Display Rules
      var pos =this.body.position;
      push()
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);  
      pop()
    }
  };
