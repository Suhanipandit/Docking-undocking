var iss
var spacecraft
var hasDocked=false

function preload(){
  ISSimage=loadImage("Docking-undocking/iss.png");
  spacebgimage=loadImage("Docking-undocking/spacebg.jpg")
  scimg1=loadImage("Docking-undocking/spacecraft1.png")
  scimg2=loadImage("Docking-undocking/spacecraft2.png")
  scimg3=loadImage("Docking-undocking/spacecraft3.png")
  scimg4=loadImage("Docking-undocking/spacecraft4.png")
}
function setup() {
  createCanvas(800,400);
  iss=createSprite(330,130)
  iss.addImage(ISSimage)
  iss.scale=0.5
  spacecraft=createSprite(285,300)
  spacecraft.addImage(scimg1)
  spacecraft.scale=0.3
}

function draw() {
  background(spacebgimage);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(scimg4)
      spacecraft.x=spacecraft.x-1
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(scimg3)
      spacecraft.x=spacecraft.x+1
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(scimg2)
    }
    if(keyDown(UP_ARROW)){
      spacecraft.addImage(scimg1)
      spacecraft.y=spacecraft.y-2
    }
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
   hasDocked=true
   textSize(25)
   fill("white")
   text("DOCKING SUCCESSFUL",200,300)
  }
  
  drawSprites();
}