

function setup() {
  createCanvas(1024,600);

}

function draw() 
{
textSize(20)
text("Clique nas setas do teclado para mudar de cor",200,200)
  

  if (keyIsDown(RIGHT_ARROW))
  {
    background("red")
  }

  if (keyIsDown(LEFT_ARROW))
  {
   background("blue")
  }

  if (keyIsDown(UP_ARROW))
  {
    background("green")
  }

  if (keyIsDown(DOWN_ARROW))
  {
    background("yellow")
  }

  drawSprites();

}




