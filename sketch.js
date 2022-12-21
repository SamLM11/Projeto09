

function setup() {
  createCanvas(1100,675);

}

function draw() 
{
textSize(20)
text("Clique nas setas do teclado para mudar de cor",200,200)
  

  if (keyIsDown(RIGHT_ARROW))
  {
    background("green")
  }

  if (keyIsDown(LEFT_ARROW))
  {
   background("yellow")
  }

  if (keyIsDown(UP_ARROW))
  {
    background("blue")
  }

  if (keyIsDown(DOWN_ARROW))
  {
    background("red")
  }

  drawSprites();

}




