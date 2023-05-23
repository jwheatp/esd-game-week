class ComputerTrap extends Trap {
  scene;
  css;
  computer;
  speed = 50;

  distance = 100;

  x;
  y;
  isGoingTop = true;

  constructor(scene, x, y) {
    super();

    this.scene = scene;
    this.x = x;
    this.y = y;

    this.computerY = this.y;
    this.cssX = this.x -60;

    this.computer = scene.physics.add.image(x, this.computerY, "trapcomputer");
    this.computer.setScale(0.6);
    this.computer.body.setAllowGravity(false);

    // this.computer.body.y

    // myInterval = setInterval(#, 1000);

    this.css = scene.physics.add.image(this.cssX , this.computerY, "trapcss");
    this.css.setScale(0.09);
    this.css.body.setAllowGravity(false);

    this.computer.setVelocityY(-this.speed);
    this.isGoingTop = true;

    // const computerGroup = new Group();
    // computerGroup.addChild(trapcomputer);
    // computerGroup.addChild(trapcss);
    // computerGroup.visible = false;
  }

  update() {
    if (
      this.isGoingTop &&
      this.computer.body.y < this.computerY - this.distance
    ) {
      this.computer.setVelocityY(this.speed);
      this.isGoingTop = false;
    }

    if (
      !this.isGoingTop &&
      this.computer.body.y > this.computerY + this.distance
    ) {
      this.computer.setVelocityY(-this.speed);
      this.isGoingTop = true;
    }
  }
}
