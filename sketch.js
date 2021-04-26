
var fixed,moving;
var a,b,c,d
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,100,80,60);
  a = createSprite(100,100,50,60);
  b = createSprite(650,100,50,70);
  c = createSprite(100,250,50,80);
  d = createSprite(650,250,50,90);
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
  a.shapeColor = "white";
  b.shapeColor = "pink";
  a.velocityX = 5;
  b.velocityX = -5;
}

function draw() {
   bounceOff(a,b)
  moving.x = mouseX;
  moving.y = mouseY;

  // console.log(moving.x - fixed.x);
  if(isTouching(moving,d)){
    
    moving.shapeColor = "red";
  }
  else {
    
   moving.shapeColor = "green";
  }

  background(0);  
  drawSprites();
}
  
// Boolean Values - true and false

// function with arguments

