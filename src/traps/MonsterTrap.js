class SawTrap extends Trap {
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

    this.discSprite = scene.physics.add.image(x - 10, y, "trap-monster-disc");
    this.discSprite.setScale(1);
    this.discSprite.body.setAllowGravity(false);

    this.platformSprite = scene.physics.add.image(
      x,
      y,
      "trap-monster-platform"
    );
    this.platformSprite.setScale(1);
    this.platformSprite.body.setAllowGravity(false);

    this.discSprite.setVelocityY(-200);
  }

  update() {
    if (this.discSprite.body.y > this.y + 1) {
      this.discSprite.setVelocityY(0);
    }
  }
}
