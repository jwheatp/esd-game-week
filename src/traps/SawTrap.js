class SawTrap extends Trap {
  scene;
  platformSprite;
  discSprite;
  speed = 150;

  x;
  y;

  isGoingRight = true;

  constructor(scene, x, y) {
    super();

    this.scene = scene;
    this.x = x;
    this.y = y;

    this.discSprite = scene.physics.add.image(x, y - 18, "trap-saw-disc");
    this.discSprite.body.setAllowGravity(false);
    this.discSprite.setImmovable(true);
    this.scene.physics.add.overlap(
      this.discSprite,
      this.scene.player.sprite,
      () => {
        this.scene.player.die();
      }
    );

    this.platformSprite = scene.physics.add.image(x, y, "trap-saw-platform");
    this.platformSprite.body.setAllowGravity(false);
    this.platformSprite.setImmovable(true);
    this.scene.physics.add.collider(
      this.platformSprite,
      this.scene.player.sprite
    );

    this.discSprite.setVelocityX(this.speed);
    this.isGoingRight = true;

    this.scene.tweens.add({
      targets: this.discSprite,
      rotation: 360,
      duration: 200000,
      repeat: -1,
      ease: "Linear",
    });
  }

  update() {
    if (this.isGoingRight && this.discSprite.body.x > this.x + 40) {
      this.discSprite.setVelocityX(-this.speed);
      this.isGoingRight = false;
    }

    if (!this.isGoingRight && this.discSprite.body.x < this.x - 90) {
      this.discSprite.setVelocityX(this.speed);
      this.isGoingRight = true;
    }
  }
}
