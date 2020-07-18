
class Bird {
  constructor(x, y, r) {
    var options = {
      restitution: 0.5
    };
    this.body = Matter.Bodies.circle(x, y, r, options);
    
    Matter.World.add(world, this.body);
    this.r = r;
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(dotImg, 0, 0, this.r * 2, this.r * 2);
    pop();
  }
}
