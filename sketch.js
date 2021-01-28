var fairy,fairyImage1,star;
var starImage;
var bgImage;
var starBody;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var engine,world;
function preload()
{
   //preload the images here
   fairyImage1=loadAnimation("images/fairy.png");
  starImage=loadAnimation("images/star.png");
  bgImage=loadImage("images/starnight.png");
}

function setup() {
  createCanvas(800, 750);
  fairy=createSprite(150,500,20,40);
  fairy.addAnimation("flying",fairyImage1);
  fairy.scale=0.3;

  star=createSprite(650,30,5,20);
  star.addAnimation("bright",starImage);
  star.scale=0.3;

  engine=Engine.create();
  world=engine.world;
  starBody = Bodies.circle(650,30,5,{isStatic:true});
	World.add(world, starBody);


  
 
}


function draw() {
  background(bgImage);
  Engine.update(engine);
  star.x = starBody.position.x
  star.y = starBody.position.y

  console.log(fairy.x);

  if(star.y>425 && starBody.position.y>425){
    Matter.Body.setStatic(starBody,true);
  }
  
  
  drawSprites();
}
  function keyPressed(){
  if(keyCode===LEFT_ARROW){
    fairy.x=fairy.x-18;
}
if(keyCode===RIGHT_ARROW){
  fairy.x=fairy.x+18;
}
if(keyCode===DOWN_ARROW){
  Matter.Body.setStatic(starBody,false);
}

  }

