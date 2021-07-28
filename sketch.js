var bgImg;

function preload(){
  bgImg = loadImage('Images/homeScreen.jpg')
}

function setup(){
  createCanvas(displayWidth-320,displayHeight-190)

}

function draw() {
  background(bgImg)

        drawSprites();
        
}