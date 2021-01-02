var a,b;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(200,200,50,50);
  a.shapeColor = "green";
  b.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  a.x = mouseX;
  a.y = mouseY;
  
  if (a.x-b.x <55 && b.x-a.x<55 && a.y-b.y<55 && b.y-a.y<55){
    a.shapeColor = "red";
    b.shapeColor = "red"; 
  }
  else{
    a.shapeColor = "green";
  b.shapeColor = "green";
  }
  drawSprites();
}