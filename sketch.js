
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	crumpledball=new Paper();
	dustbin1=new Dustbin(550,620,20,140);
	dustbin2=new Dustbin(740,620,20,140);
	dustbin3=new Dustbin(645,680,175,20);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  rectMode(CENTER);
  crumpledball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	isStatic:false;
	Matter.Body.applyForce(crumpledball.body,{x:450,y:300},{x:0.003,y:0.004});
		

	}
}



