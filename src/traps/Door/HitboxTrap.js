class HitboxTrap extends Trap {
  scene
  hitboxSprite

  x
  y

  constructor(scene, openedTrap, x, y) {
    super()

    this.scene = scene
    this.x = x
    this.y = y



  }

  update() {
    // if (this.discSprite.body.x > this.x + 45) {
    //   this.discSprite.setVelocityX(-20)
    // }
    // else if (this.discSprite.body.x > this.x - 45) {
    //   this.discSprite.setVelocityX(20)
    // }
  }
}