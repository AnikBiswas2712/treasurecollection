var Play=1;
var End=0;
var GameState=1;
var treasureCollection=0;
var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var end,endImg;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
  if (GameState===1){
      if (cashG.isTouching(boy)) {
        cashG.destroyEach();
      }
      else if (diamondsG.isTouching(boy)) {
        diamondsG.destroyEach();
      
      }else if(jwelleryG.isTouching(boy)) {
        jwelleryG.destroyEach();
      
      }else{
        if(swordGroup.isTouching(boy)) {
          swordGroup.destroyEach();
      }
    }
  }
  
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,400,30);
  if (boy.isTouching(cashG)||(diamondsG)||(jwelleryG)){
     treasureCollection=treasureCollection+1;
  }
  
  if (boy.isTouching(swordGroup)){
    GameState=0;
  }
  if (GameState===0){
    end = createSprite(width/2,height/2);
    end.addAnimation("end",endImg);
    cashG.destroyEach();
    diamondG.destroyEach();
    jwelleryG.destroyEach();
  }
  drawSprites();
}

function createCash() {
  if (World.frameCount % 50 === 0) {
  var cash = createSprite(Math.round(random(50,width-20),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 7;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 === 0) {
  var diamonds = createSprite(Math.round(random(50,width-20),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 7;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 === 0) {
  var jwellery = createSprite(Math.round(random(50,width-20),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 7;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 === 0) {
  var sword = createSprite(Math.round(random(50,width-20),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 7;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}