const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var polygon, polygonImage;
var slingshot;
var box1;
function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var options = {
        density: 3
    }

    polygon = Bodies.circle(50,200,20,options);
    World.add(world,polygon);

    ground = new Ground(400,350,300,20);

    slingshot = new Slingshot(this.polygon,{x:100, y:200})

    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);

    //lvl 2
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    //lvl 3 
    box9 = new Box(390,155,30,40);

    
}
function draw() {
    Engine.update(engine);
    background("Grey")

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    ground.display();
    slingshot.display();

    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y, 40,40);
}
function mouseDragged(){
    console.log(polygon);
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
}

