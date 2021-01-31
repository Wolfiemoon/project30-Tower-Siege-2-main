class greyBlock extends Baseclass{
  constructor(x,y,width,height,options) {
    super(x,y,width,height,options)
  }
  display(){

    //Display Rules

    super.display()


    fill("grey");

      if(this.body.speed < 3){
      super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        tint(255,this.Visiblity);
        this.Visiblity = this.Visiblity - 5;
        rect(this.body, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }  


  }
};
