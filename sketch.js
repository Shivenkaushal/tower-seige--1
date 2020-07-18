

const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

var ground;

var bird;
var world, engine;
var mConstraint;
var slingshot;
var box1,box2;

var dotImg;
var boxImg;
var bkgImg;

function preload() {
  dotImg = loadImage('images/dot.png');
  boxImg = loadImage('images/equals.png');
  bkgImg = loadImage('images/skyBackground.png');
}

function setup() {
  var canvas = createCanvas(911, 400);
  engine = Engine.create();
  world = engine.world;
  
 
  bird = new Bird(150, 300, 25);
  box1 = new box(620,380,10,120)
ground= new Ground(551,400,1311,20)

  slingshot = new SlingShot({x:170,y:300,},bird.body );

  var mouse = Mouse.create(canvas.elt);
  var options = {
    mouse: mouse
  };

  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}


function draw() {
  background(bkgImg);
  Matter.Engine.update(engine);

  box1.display();
  ground.display();
  slingshot.display();
  bird.display();

}


function keyPressed() {
  if (keyCode === 32) {
    World.remove(world,bird.body)
    bird = new Bird(150, 300, 25);
    slingshot.attach(bird.body);
  }
}
function mouseReleased(){
setTimeout(()=>{
  
  slingshot.fly()
},100)
}