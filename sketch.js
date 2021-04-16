const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(400,590,800,20);
    box1 = new Box(435,200,10,20);
    box2 = new Box(443,250,25,50);
    box3 = new Box(435,300,30,50);
    box4 = new Box(445,350,40,50);
    box5 = new Box(435,400,50,50);
    box6 = new Box(445,450,100,50);
    box7 = new Box(435,500,150,50);
    box8 = new Box(445,550,200,50);
}



function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
}