var quadrado

function setup() {
  createCanvas(400,400);
  quadrado = createSprite(200, 200, 100, 100)
  quadrado.shapeColor = "red"
}

function draw() 
{
  background(30);
 if(keyDown("right")){
  quadrado.x+=5
 }
 if(keyDown("left")){
  quadrado.x-=5
 }
 if(keyDown("up")){
  quadrado.y-=5
 }
 if(keyDown("down")){
  quadrado.y+=5
 }
  drawSprites();

}




