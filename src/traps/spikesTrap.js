class SpikesTrap extends Trap {

  scene
  platformSprite
  platformSprite2

  x
  y

  constructor(scene, x, y) {
    super();

    this.scene = scene
    this.x = x
    this.y = y

    this.platformSprite = scene.physics.add.image(400, 300, "trap-saw-spike");
    this.platformSprite.setScale(0.5);
    this.platformSprite.body.setAllowGravity(false);
    this.scene.physics.add.overlap(this.platformSprite, this.scene.player.sprite, () => {
      this.scene.player.die()
    })

    this.platformSprite2 = scene.physics.add.image(400, 500, "trap-saw-platform2");
    this.platformSprite2.setScale(0.5);
    this.platformSprite2.body.setAllowGravity(false);
    this.platformSprite2.setImmovable(true);
    this.scene.physics.add.collider(this.platformSprite2, this.scene.player.sprite);

    this.initialY = 200; // Stockez la position initiale de la plateforme

    this.platformSprite.setVelocityY(100)


  }

  update() {
    if (this.platformSprite.body.y > this.initialY + 200) {
      this.platformSprite.setVelocityY(-40)
    } else if (this.platformSprite.body.y < this.initialY) {
      this.platformSprite.setVelocityY(200) // Réinitialisez la vitesse pour la faire redescendre
    }
  }
}