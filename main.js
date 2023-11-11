var ancho=screen.width
var alto=screen.height-209
var saltando=false
function preload() {
    fondo=loadImage("fondo final.png")
    correr=loadAnimation("m4.png","m3.png","m2.png","m3.png")
    nomover=loadAnimation("m1.png")
    saltar=loadAnimation("m5.png")
    gumbacamina=loadAnimation("g1.png","g2.png")
    gumbamuere=loadAnimation("g3.png")
}

function setup() {
    canvas = createCanvas(ancho, alto);
    fondo1=createSprite(ancho/2,alto/2,ancho,alto)
    fondo2=createSprite(ancho+ancho/2,alto/2,ancho,alto)
    fondo2.shapeColor="red"
    marco=createSprite(141,574.7)
    suelo=createSprite(720,603.5, ancho,10)
    marco.scale=3.2
    marco.addAnimation("correr",correr)
    marco.addAnimation("nomover",nomover)
    marco.addAnimation("saltar",saltar)
    fondo.resize(ancho,alto)
    fondo1.addImage(fondo)
    fondo2.addImage(fondo)
    frameRate(40)
}

function draw() {
    image(fondo,0,0,ancho,alto)
    marco.collide(suelo)
    gumbaemerge()
    drawSprites()
    if(fondo1.x<=-ancho/2){
        fondo1.x=ancho+ancho/2
    }
     if(fondo2.x<=-ancho/2){
        fondo2.x=ancho+ancho/2
    }
    if(keyDown(RIGHT_ARROW)){
        marco.mirrorX(+1)
        marco.changeAnimation("correr",correr)
        if(marco.x>610){
            fondo1.x-=10
            fondo2.x-=10
        }
        else{
            marco.x=marco.x+7

        }
    }
    else if(keyDown(LEFT_ARROW)){
        marco.x=marco.x-7
        marco.mirrorX(-1)
        marco.changeAnimation("correr",correr)
    }
    else if(keyDown(UP_ARROW)&&marco.y>360 &&!saltando){
        saltando=true
    marco.velocity.y=-10
    marco.changeAnimation("saltar",saltar)
    }
    marco.velocity.y=marco.velocity.y+0.5
    if(marco.y>572){
        saltando=false
    }
    if(!keyDown(LEFT_ARROW)&&!keyDown(RIGHT_ARROW)&&!keyDown(UP_ARROW)){
        marco.changeAnimation("nomover",nomover)
    }
}
function gumbaemerge(){
    var tiempo=Math.round(random(1,10))
    if(frameCount%160==0){
    var gumba=createSprite(ancho-200,575)
    gumba.addAnimation("gumbacamina",gumbacamina)
    gumba.velocity.x=-4
    gumba.scale=3
    }
}
 