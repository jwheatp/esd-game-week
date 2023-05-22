class SawTrap extends Trap {
  scene
  platformSprite
  discSprite

  x
  y

  constructor(scene, x, y) {
    super()

    this.scene = scene
    this.x = x
    this.y = y

    this.discSprite = scene.physics.add.image(x, y-10, "trap-saw-disc");
    this.discSprite.setScale(0.2)
    this.discSprite.body.setAllowGravity(false)

    this.platformSprite = scene.physics.add.image(x, y, "trap-saw-platform");
    this.platformSprite.setScale(0.1)
    this.platformSprite.body.setAllowGravity(false)

    this.discSprite.setVelocityX(20)
  }

  update() {
    if(this.discSprite.body.x > this.x + 45) {
      this.discSprite.setVelocityX(-20)
    }
  }
}