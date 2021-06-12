var trex , trex_running;
var edges;
var ground, ground_image;
function preload(){
  trex_running= loadAnimation("images/trex1.png" ,
                        "images/trex3.png", "images/trex4.png" );
  ground_image = loadImage( "images/ground2.png ");
}

function setup(){
  createCanvas(600,200)
  
  //create trex
  trex= createSprite(50,160,10,100);
  trex.addAnimation ("running" ,  trex_running) ;
  trex.scale=0.5;

  //create edges
  edges = createEdgeSprites();
// creat ground
ground=createSprite(300,180,600,20);
ground.addImage("ground" ,  ground_image) ;
}

function draw(){
  background("lightgrey");

  //move trex up
  if (keyDown("space")){
    trex.velocityY=-10;
  }
  //gravity for trex
  trex.velocityY=trex.velocityY+0.8;
  //making ground move
  ground.velocityX=-2
  //make ground come continuasly
  if(ground.x<0){
    ground.x= ground.width/2;
  }

  // collide trex with edges

  trex.collide(ground)

  drawSprites();

}