var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(80,30);
	star.addImage(starImg);
	star.scale = 0.2;

	//star.x=starBody.position.x
    //star.y=starBody.position.y

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  if(star.position.y > 470){
	  star.velocityY=0;
  }

  drawSprites();
  keyPressed();
}

function keyPressed() {
	//write code here
    if(keyDown("right")){
     fairy.velocityX=5;
	}

	if(keyDown("left")){
	 fairy.velocityX=-5;
	}

	if(keyDown("down")){
	  star.velocityY=3;
	}
}
