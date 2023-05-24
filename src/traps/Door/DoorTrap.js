class DoorTrap extends Trap {
  scene
  doorSprite

  x
  y

  constructor(scene, x, y) {
    super()

    this.scene = scene
    this.x = x
    this.y = y

    this.doorSprite = scene.physics.add.image(x, y, "trap-mode-closed");
    this.doorSprite.setScale(1.5)
    this.doorSprite.body.setAllowGravity(false)
    this.doorSprite.setImmovable(true)




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