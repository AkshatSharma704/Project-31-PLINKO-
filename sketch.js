const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var ground;

var divisionHeight = 300;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  for(var k = 0;k <= width; k =  k+80){
    divisions.push(new Divisions(k, height - 150, 10, 300));
  }

  for(var i = 75; i<= width; i = i+50){
    plinkos.push(new Plinko(i,75));
  }

  for(var i = 50; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i, 175));
  }

  for(var i = 75; i<= width; i = i+50){
    plinkos.push(new Plinko(i, 275));
  }

  for(var i = 50; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i,375));
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
}

  for(var i = 0; i< plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount % 60 === 0 ){
    particles.push(new Particle(random(width/2 - 30, width/2 + 30), 10, 10));
  }
  ground.display();
  //plinko.display();
  //particle.display();

  drawSprites();
}