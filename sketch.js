const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  createCanvas(800,400);
  ground = new Ground(400,390,800,20)
  stand1 = new Ground(390,250,200,20)
  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40);
  block8 = new Box(420,195,30,40);
  block9 = new Box(390,155,30,40);
  slingshot = new SlingShot(polygon,{x:50, y:100});
}

function draw() {
  background(0,25,55);  
  Engine.update(engine);
  ellipse(polygon.position.x,polygon.position.y,20);
  ground.display();
  stand1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
/*function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon);
  }
}
*/

