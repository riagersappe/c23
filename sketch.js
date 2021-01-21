const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myengine,myworld,box1,box2,ground1;

function setup() {
  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;

  box1 = new box(400,100,50,50);
  box2 = new box(430,200,50,50);

  ground1 = new ground(400,375,800,50)
}

function draw() {
  background(0); 
  Engine.update(myengine)
  
  box1.display();
  box2.display();

  ground1.display();
}