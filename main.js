var ancho=screen.width
var alto=screen.height-209
var saltando=false
function preload() {
    fondo=loadImage("fondo final.png")
    correr=loadAnimation("m4.png","m3.png","m2.png","m3.png")
    nomover=loadAnimation("m1.png")
    saltar=loadAnimation("m5.png")
}

function setup() {
    canvas = createCanvas(ancho, alto);
    marco=createSprite(141,574.7)
    suelo=createSprite(720,603.5, ancho,10)
    marco.scale=3.2
    marco.addAnimation("correr",correr)
    marco.addAnimation("nomover",nomover)
    marco.addAnimation("saltar",saltar)
    frameRate(40)
}

function draw() {
    image(fondo,0,0,ancho,alto)
    marco.collide(suelo,nosalta)
    if(saltando && marco.y<360){
        marco.velocity.y=10
    }
    if(!saltando){
    }
    drawSprites()
    if(keyDown(RIGHT_ARROW)){
        marco.x=marco.x+7
        marco.mirrorX(+1)
        marco.changeAnimation("correr",correr)
    }
    else if(keyDown(LEFT_ARROW)){
        marco.x=marco.x-7
        marco.mirrorX(-1)
        marco.changeAnimation("correr",correr)
    }
    else if(keyDown(UP_ARROW)&&!saltando){
        saltando=true
    marco.velocity.y=-10
    marco.changeAnimation("saltar",saltar)
    }
    else if(keyWentUp(UP_ARROW)){
    marco.velocity.y=10
    marco.changeAnimation("saltar",saltar)
    }
    if(!keyDown(LEFT_ARROW)&&!keyDown(RIGHT_ARROW)&&!saltando){
        marco.changeAnimation("nomover",nomover)
    }
}
 function nosalta (){
    if(!keyDown(UP_ARROW)){
        saltando=false
    }
 }