class ComputerTrap extends Trap {
  scene;
  platformSprite;
  discSprite;

  x;
  y;

  constructor(scene, x, y) {
    super();

    this.scene = scene;
    this.x = x;
    this.y = y;

    this.discSprite = scene.physics.add.image(x, y - 18, "trap-saw-platform");
    this.discSprite.setScale(0);
    this.discSprite.body.setAllowGravity(false);

    this.platformSprite = scene.physics.add.image(x, y, "trap-saw-disc");
    this.platformSprite.setScale(0.1);
    this.platformSprite.body.setAllowGravity(false);

    this.discSprite.setVelocityX(20);
  }

  update() {
    if (this.discSprite.body.x > this.x + 45) {
      this.discSprite.setVelocityX(-20);
    }
  }
}
