// fichier sacha + faouzi
class PlatformTrap extends Trap {
  scene;
  platformSprite;

  distance = 80;

  isGoingDown = true;

  constructor(scene, x, y) {
    super();

    this.scene = scene;
    this.x = x;
    this.y = y;

    this.platformSprite = scene.physics.add.image(x, y + 4, "trapplatform");
    this.platformSprite.setScale(1.5);
    this.platformSprite.body.setAllowGravity(false);
    this.platformSprite.setImmovable(true);

    this.scene.physics.add.collider(
      this.platformSprite,
      this.scene.player.sprite,
      () => {
        this.platformSprite.setVelocityY(20);
      }
    );

    // this.platformSprite.setVelocityY(-this.speed);

    this.platformSprite.setVelocityY(60);
  }

  setX(x) {
    this.platformSprite.x = x;
    this.x = x;
  }

  setY(y) {
    this.platformSprite.y = y;
    this.y = y;
  }

  update() {
    this.setup();

    if (this.isGoingDown && this.platformSprite.body.y > this.y + 50) {
      this.platformSprite.setVelocityY(-70);
      this.isGoingDown = false;
    }

    if (!this.isGoingDown && this.platformSprite.body.y < this.y - 50) {
      this.platformSprite.setVelocityY(70);
      this.isGoingDown = true;
    }
  }
}
