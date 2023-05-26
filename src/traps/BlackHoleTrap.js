class BlackHoleTrap extends Trap {
  scene;
  x;
  y;
  blackHoleSprite;
  constructor(scene, x, y) {
    super(scene, x, y);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.blackHoleSprite = scene.physics.add.image(x, y, "trap-blackHole");
    this.blackHoleSprite.setScale(0.2);
    this.blackHoleSprite.body.setAllowGravity(false);
    this.scene.tweens.add({
      targets: this.blackHoleSprite,
      rotation: 360,
      duration: 400000,
      repeat: 10000,
      ease: "Linear",
    });
    this.hbBlackHole = new HbBlackHole(this.scene, this.x, this.y);
    this.scene.physics.add.overlap(
      this.scene.player.sprite,
      this.hbBlackHole.sprite,
      () => {
        // Faire disparaître le joueur
        this.scene.player.die();
        // Autres actions à effectuer en cas de collision avec hbBlackHole...
      }
    );
  }
  update() {
    this.setup()

    //trap BlackHole attraction
    if (
      this.scene.player.sprite.body.x >= this.blackHoleSprite.body.x - 100 &&
      this.scene.player.sprite.body.y >= this.blackHoleSprite.body.y - 100 &&
      this.scene.player.sprite.body.x <= this.blackHoleSprite.body.x + 100 &&
      this.scene.player.sprite.body.y <= this.blackHoleSprite.body.y + 100
    ) {
      const playerVelocityX = this.scene.player.lastSpeedX;
      const playerVelocityY = this.scene.player.lastSpeedY;
      const attraction = 30;
      const shrink = Math.min(
        Math.abs(
          this.scene.player.sprite.body.x - this.blackHoleSprite.body.x
        ) / 100,
        1
      );
      if (this.scene.player.sprite.body.x < this.blackHoleSprite.body.x) {
        this.scene.player.sprite.setVelocityX(attraction + playerVelocityX);
        this.scene.player.sprite.setScale(shrink);
        this.scene.player.sprite.rotation += 0.5;
      } else if (
        this.scene.player.sprite.body.x > this.blackHoleSprite.body.x
      ) {
        this.scene.player.sprite.setVelocityX(-attraction + playerVelocityX);
        this.scene.player.sprite.setScale(shrink);
        this.scene.player.sprite.rotation += 0.5;
      }
      if (this.scene.player.sprite.body.y < this.blackHoleSprite.body.y) {
        this.scene.player.sprite.setVelocityY(attraction + playerVelocityY);
        this.scene.player.sprite.setScale(shrink);
        this.scene.player.sprite.rotation += 0.5;
      } else if (
        this.scene.player.sprite.body.y > this.blackHoleSprite.body.y
      ) {
        this.scene.player.sprite.setVelocityY(-attraction + playerVelocityY);
        this.scene.player.sprite.setScale(shrink);
        this.scene.player.sprite.rotation += 0.5;
      }
      /*
      const signX = Math.sign(this.scene.player.sprite.body.velocity.x)
      this.scene.player.sprite.setVelocityX(-signX * 50);
      */
    } else {
      this.scene.player.sprite.setScale(1);
      this.scene.player.sprite.rotation = 0;
    }
  }
  setX(x) {
    this.blackHoleSprite.x = x;
    this.hbBlackHole.setX(x)
    this.x = x;
  }
  setY(y) {
    this.blackHoleSprite.y = y;
    this.hbBlackHole.setY(y)
    this.y = y;
  }
}
class HbBlackHole {
  scene;
  x;
  y;
  sprite;
  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.HbBlackHoleSprite = scene.physics.add.image(x, y, "hb - trap - blackHole");
    this.HbBlackHoleSprite.setScale(0.4);
    this.HbBlackHoleSprite.body.setAllowGravity(false);
  }
  update() { }
  setX(x) {
    this.HbBlackHoleSprite.x = x;
    this.x = x;
  }
  setY(y) {
    this.HbBlackHoleSprite.y = y;
    this.y = y;
  }
}









