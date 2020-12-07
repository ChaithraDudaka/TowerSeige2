
  class Box{
    constructor(x, y, w, h, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display(){
        //console.log(this.body.speed);
        var angle = this.body.angle;
        if(this.body.speed < 3){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0 ,this.width, this.height);
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           pop();
       
        }
      }
    }
