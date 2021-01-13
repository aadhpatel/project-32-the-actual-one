const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground, ground2;
var block1, block2, block3, block4, block5, block6, block7, block8,block9;
var polygon, polygonImg, slingShot;

var score=0;

var background, getBackgroundImg;


function preload() {
polygonImg = loadImage("polygon.png");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    background(0);
    engine = Engine.create();
    world = engine.world;
    
    
ground=new Ground(100,400,5000,20);
ground2=new Ground(400,300,200,20);


//last level
block1 = new Block(330, 235, 30, 40);
block2 = new Block(360, 235, 30, 40);
block3 = new Block(390, 235, 30, 40);
block4 = new Block(420, 235, 30, 40);
block5 = new Block(450, 235, 30, 40);

//middle level
block6 = new Block(360,195,30,40);
block7 = new Block(390,195,30,40);
block8 = new Block(420,195,30,40);
fill("black");

//top
block9 = new Block(390,155,30,40);



polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);


    slingShot = new Slingshot(polygon,{x:100,y:200});

   

}

function draw(){
    background("white");
    Engine.update(engine);
    text("SCORE:"+score,750,40);

    ground.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();


    slingShot.display();

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y,40,40);

    

    


    
}

function mouseDragged(){
    
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    
    
}


function mouseReleased(){
    slingShot.fly();
   
}

function keyPressed(){
    if(keyCode === 32){
       slingShot.attach(this.polygon);
    }
}
async function getBackgroundImg() 
{
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJson = await response.json();
    var datetime = responseJson.currentDateTime;
    var hour = datetime.slice(11,13);

    if (hour >= 06 && hour <= 19) {
        background("white");
    }
    else {
        background("black");   
    }
   
}
