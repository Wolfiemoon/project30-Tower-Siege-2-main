class pinkBlock extends Baseclass{
  constructor(x,y,width,height,options) {
  super(x,y,width,height,options)
  }
  display(){
    fill("pink");
      if(this.body.speed < 3){
      super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(this.body, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }  

  }
};
