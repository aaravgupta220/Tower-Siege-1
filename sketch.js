const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pol_image, polygon;

function preload(){
    pol_image = loadImage("polygon.png");
}

function setup(){

    var canvas = createCanvas(1200, 600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 500, 400, 20);

    box1 = new Box(600, 485, 30, 30);
    box2 = new Box(585, 485, 30, 30);
    box3  = new Box(570, 485, 30, 30);
    box4 = new Box(615, 485, 30, 30);
    box5 = new Box(630, 485, 30, 30);
    box6 = new Box(645, 485, 30, 30);
    box7 = new Box(660, 485, 30, 30);
    box8 = new Box(555, 485, 30, 30);
    box9 = new Box(540, 485, 30, 30);

    box10 = new Box(600, 470, 30, 30);
    box11 = new Box(615, 470, 30, 30);
    box12 = new Box(630, 470, 30, 30);
    box13 = new Box(645, 470, 30, 30);
    box14 = new Box(585, 470, 30, 30);
    box15 = new Box(570, 470, 30, 30);
    box16 = new Box(555, 470, 30, 30);

    box17 = new Box(600, 455, 30, 30);
    box18 = new Box(615, 455, 30, 30);
    box19 = new Box(630, 455, 30, 30);
    box20 = new Box(585, 455, 30, 30);
    box21 = new Box(570, 455, 30, 30);

    box22 = new Box(600, 440, 30, 30);
    box23 = new Box(615, 440, 30, 30);
    box24 = new Box(585, 440, 30, 30);

    box25 = new Box(600, 425, 30, 30);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    sling = new Slingshot(this.polygon, {x:50, y:200});

}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);

    ellipseMode(RADIUS);
    ellipse(polygon.position.x, polygon.position.y, 10, 10);

    imageMode(CENTER);
    image(pol_image, polygon.position.x, polygon.position.y, 40, 40);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    sling.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}