
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options = {
		'isStatic':false,
		'restitution':0.3,
		'friction':0.5,
		'density':1.2,
	}

	//Create the Bodies Here.
	ground=createSprite(1,670,1600,10);

	paper = createSprite(50,620,40,10,);
	
	dustbin1 = createSprite(620,650,110,10);

	dustbin2 = createSprite(570,610,10,80);

	dustbin3 = createSprite(670,610,10,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  drawSprites();

 
}


function Keypressed(){

   if(Keypressed === up_arrow){
	   paper.position.x = 650;
	   paper.position.y = 620;
   }

}