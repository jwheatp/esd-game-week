class ComputerTrap extends Trap {
  scene;
  css;
  computer;
  speed = 80;
  speedfire = 200;
  distance = 100;
  x;
  y;
  isGoingTop = true;
  isGoingLeft = true;

  images = ["trapcss", "traphtml", "trapphp", "trapjs", "wordpress"];

  constructor(scene, x, y) {
    super();

    this.scene = scene;
    this.x = x;
    this.y = y;

    this.computerY = this.y;
    this.cssX = this.x - 50;

    this.computer = scene.physics.add.image(x, this.computerY, "trapcomputer");
    this.computer.setScale(0.6);
    this.computer.body.setAllowGravity(false);

    // this.computer.body.y

    this.css = scene.physics.add.image(this.cssX, this.computerY, "trapcss");
    this.css.setScale(0.09);
    this.css.body.setAllowGravity(false);

    this.computer.setVelocityY(-this.speed);
    this.isGoingTop = true;

    this.css.setVelocityX(-this.speed);
    this.isGoingLeft = true;

    const myInterval = setInterval(() => this.fire(), 1500);
  }
  fire() {
    const index = Math.floor(Math.random() * this.images.length);

    console.log(this.images[index]);

    this.css = this.scene.physics.add.image(
      this.cssX,
      this.computer.body.y + 30,
      this.images[index]
    );
    this.css.setScale(0.09);
    this.css.body.setAllowGravity(false);

    // this.css.setGravity(-100, -100);
    // console.log(this.css.body.mass);
    this.scene.physics.add.overlap(this.css, this.scene.player.sprite, () => {
      this.scene.player.die();
    });
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

    if (this.isGoingLeft && this.css.body.x < this.x + 5) {
      this.css.setVelocityX(-this.speedfire);
      // this.isGoingLeft = false;
    }
  }
}
