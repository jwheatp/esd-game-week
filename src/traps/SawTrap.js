class SawTrap extends Trap {
  scene;
  sprite;
  discSprite;
  speed = 150;

  x;
  y;

  isGoingRight = true;

  constructor(scene, x, y) {
    super(scene, x, y);

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

    this.sprite = scene.physics.add.image(x, y, "trap-saw-platform");
    this.sprite.body.setAllowGravity(false);
    this.sprite.setImmovable(true);
    this.scene.physics.add.collider(
      this.sprite,
      this.scene.player.sprite
    );


  }

  startAnimation() {
    this.scene.tweens.add({
      targets: this.discSprite,
      rotation: 360,
      duration: 200000,
      repeat: -1,
      ease: "Linear",
    });

    this.discSprite.setVelocityX(this.speed);
    this.isGoingRight = true;
  }

  update() {
    this.setup();

    if (this.isGoingRight && this.discSprite.body.x > this.x + 120) {
      this.discSprite.setVelocityX(-this.speed);
      this.isGoingRight = false;
    }

    if (!this.isGoingRight && this.discSprite.body.x < this.x - 20) {
      this.discSprite.setVelocityX(this.speed);
      this.isGoingRight = true;
    }
  }

  setVelocityX(speed) {
    this.discSprite.setVelocityX(speed)
    this.sprite.setVelocityX(speed)

  }

  setVelocityY(speed) {
    // je mets une vitesse X à 200
    this.discSprite.setVelocityY(speed)
    this.sprite.setVelocityY(speed)
  }
}
