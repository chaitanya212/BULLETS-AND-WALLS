var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(800,400);
  bullet = createSprite(200, 200, 50, 50);
  wall = createSprite(700, 200,thickness,300);
  speed=random(20,250);
  weight=random(30,52);
  thickness=random(22,83)
}

function draw() {
  background("black");  
  bullet.velocityX=speed;
  
  
  if(hasCollided(bullet,wall))
  {
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor="red";
}
if(damage<10){
  wall.shapeColor="green";
}
  }




bullet.depth=bullet.depth+1;
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}