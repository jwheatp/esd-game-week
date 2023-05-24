class BlackHoleTrap extends Trap {
  scene
  x
  y
  blackHoleSprite


  constructor(scene, x, y) {
    super()

    this.scene = scene
    this.x = x
    this.y = y

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
  }

  update() {
    //trap BlackHole attraction 
    if (this.scene.player.sprite.body.x >= this.blackHoleSprite.body.x - 100 &&
      this.scene.player.sprite.body.y >= this.blackHoleSprite.body.y - 100 && this.scene.player.sprite.body.x <= this.blackHoleSprite.body.x + 100 && this.scene.player.sprite.body.y <= this.blackHoleSprite.body.y + 100) {

      const playerVelocityX = this.scene.player.lastSpeedX
      const playerVelocityY = this.scene.player.lastSpeedY
      const attraction = 30

      const shrink = Math.min(Math.abs(this.scene.player.sprite.body.x - this.blackHoleSprite.body.x) / 100, 1)

      if (this.scene.player.sprite.body.x < this.blackHoleSprite.body.x) {
        this.scene.player.sprite.setVelocityX(attraction + playerVelocityX)
        this.scene.player.sprite.setScale(shrink)
        this.scene.player.sprite.rotation += 0.5;

      }
      else if (this.scene.player.sprite.body.x > this.blackHoleSprite.body.x) {
        this.scene.player.sprite.setVelocityX(-attraction + playerVelocityX)
        this.scene.player.sprite.setScale(shrink)
        this.scene.player.sprite.rotation += 0.5;
      }

      if (this.scene.player.sprite.body.y < this.blackHoleSprite.body.y) {
        this.scene.player.sprite.setVelocityY(attraction + playerVelocityY)
        this.scene.player.sprite.setScale(shrink)
        this.scene.player.sprite.rotation += 0.5;
      }
      else if (this.scene.player.sprite.body.y > this.blackHoleSprite.body.y) {
        this.scene.player.sprite.setVelocityY(-attraction + playerVelocityY)
        this.scene.player.sprite.setScale(shrink)
        this.scene.player.sprite.rotation += 0.5;
      }

      /*
      const signX = Math.sign(this.scene.player.sprite.body.velocity.x)
      this.scene.player.sprite.setVelocityX(-signX * 50);
      */
    }
    else {
      this.scene.player.sprite.setScale(1)

      this.scene.player.sprite.rotation = 0;
    }

  }
}