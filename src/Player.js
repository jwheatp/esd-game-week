class Player {
  scene
  sprite
  speed = 200


  constructor(scene, x, y) {
    this.scene = scene

    this.sprite = scene.physics.add.image(x, y, "player");

    this.sprite.setScale(0.5)
  }

  update() {
    // saut
    if (this.scene.inputs.up.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityY(-this.speed);
    }



    // déplacement horizontal
    if (this.scene.inputs.right.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityX(this.speed);
    }
    else if (this.scene.inputs.left.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityX(-this.speed);
    }
    else {
      // sinon, je remets la vitesse à 0
      this.sprite.setVelocityX(0);
    }

  }

  die() {
    console.log('le joueur est mort !')
  }
}