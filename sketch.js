var sprite;

function setup() {
  createCanvas(400,400);
  
sprite = createSprite(200,200,10,20);
}

function draw() 
{
  background(30);

  if(keyDown(RIGHT_ARROW)){
sprite.x = sprite.x + 5;
  }
  if(keyDown(LEFT_ARROW)){
    sprite.x = sprite.x - 5;
  }
drawSprites();

}




