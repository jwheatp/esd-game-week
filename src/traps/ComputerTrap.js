class ComputerTrap extends Trap {
  scene;
  css;
  computer;

  x;
  y;

  constructor(scene, x, y) {
    super();

    this.scene = scene;
    this.x = x;
    this.y = y;

    this.computer = scene.physics.add.image(x, y - 18, "trapcomputer");
    this.computer.setScale(0.5);
    this.computer.body.setAllowGravity(false);

    this.css = scene.physics.add.image(x, y, "trapcss");
    this.css.setScale(0.1);
    this.css.body.setAllowGravity(false);

    this.css.setVelocityX(20);
  }

  update() {
    if (this.css.body.x > this.x + 45) {
      this.css.setVelocityX(-20);
    }
  }
}
