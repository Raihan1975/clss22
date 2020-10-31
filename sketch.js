var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var score;
var boxs;
score=0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	boxs = new Group();
	
	var box1=createSprite(400,657,40,5);
	var box2=createSprite(385,650,5,40);
	var box3=createSprite(415,650,5,40);

	box1.shapeColor="red";
	box2.shapeColor="red";
	box3.shapeColor="red";

	boxs.add(box1);
	boxs.add(box2);
	boxs.add(box3);



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stroke("white");
  text("Score: "+ score, 700,50);
  
  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  if(packageSprite.isTouching(boxs)){
	  score=score+1;
  }

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   packageSprite.velocityY=5;
   if(packageSprite.isTouching(ground)){
	packageSprite.velocityY=0;

   }
    
  }
}


