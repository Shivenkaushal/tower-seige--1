

class SlingShot {
  constructor(pointA ,bodyB) {
    var options = {
      pointA: pointA,
      bodyB: bodyB,
      stiffness: 0.02,
      length: 20
    };
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    this.sling.bodyB = null;
  }

  display() {
    if (this.sling.bodyB) {
      stroke(0);
      strokeWeight(4);
      var posA = this.sling.pointA;
      var posB = this.sling.bodyB.position;
      line(posA.x, posA.y, posB.x, posB.y);
    }
  }
  attach(bodyB) {
    this.sling.bodyB = bodyB;
  }
}
  
