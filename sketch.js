const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(580, 850);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, 845, width, 10);

  for (var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k, height- divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 125, 10));
  }

  for (var j = 15; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j, 225, 10));
  }

  for (var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 325, 10));
  }

  for (var j = 15; j<= width-10; j=j+50){
    plinkos.push(new Plinko(j, 425, 10));
  }

}

function draw() {
  background(0);  

  textAlign(CENTER);
  fill("lightgreen");
  textSize(30);
  text("PLINKO GAME", 290, 50);
  fill("lightblue");
  textSize(25);
  text("Enjoy!", 290, 80);

  Engine.update(engine);

  for (var k = 0; k < divisions.length; k++){
     divisions[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-75, width/2+75), 10, 10));
  }

  for (var g = 0; g < particles.length; g++){
    particles[g].display();
  }

  ground.display();

  drawSprites();
}

