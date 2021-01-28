class blueBlock extends Baseclass{
  constructor(x,y,width,height,options) {
    super(x,y,width,height,options)
  }
  display(){

    //Display Rules
    fill("lightblue");
    

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






















//class Block{
  //  constructor(x, y, width, height, angle, options) {
    //    var options = {
      //      'restitution':0.8,
        //    'friction':1.0,
          //  'density':1.0,
//            isStatic:false                      
        //}
        //this.body = Bodies.rectangle(x, y, width, height, options);
        //this.width = width;
        //this.x=x
        //this.y=y
        //this.height = height;
        //World.add(world, this.body);
      //}
      //display(){
        //var pos =this.body.position;
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        //rectMode(CENTER);
        //fill(135,206,234)
        //rect(pos.x, pos.y, this.width, this.height);
        //pop();
      //}
//}