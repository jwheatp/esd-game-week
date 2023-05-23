class Player {
  scene
  sprite
  speed = 200
  jump = 400
  canMove = true
  isJumping = false

  lastSpeedX = 0
  lastSpeedY = 0


  constructor(scene, x, y) {
    this.scene = scene

    this.sprite = scene.physics.add.image(x, y, "player");

    this.sprite.body.setMass(1000)

    this.sprite.setScale(0.5)
  }

  update() {
    if(!this.canMove) {
      this.sprite.setVelocityX(0)
      return
    }

    // saut
    if (!this.isJumping && this.scene.inputs.up.isDown) {
      this.isJumping = true
      // je mets une vitesse X à 200
      this.sprite.setVelocityY(-this.jump);
      this.lastSpeedY = -this.jump
    }

    // déplacement horizontal
    if (this.scene.inputs.right.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityX(this.speed);
      this.lastSpeedX = this.speed
    } 
    else if (this.scene.inputs.left.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityX(-this.speed);
      this.lastSpeedX = -this.speed
    }

    else if (this.scene.inputs.down.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityY(this.speed);
    }
    else {
      // sinon, je remets la vitesse à 0
      this.sprite.setVelocityX(0);
      this.lastSpeedX = 0
    }

    if(Math.abs(this.sprite.body.velocity.y) === 0) {
      this.isJumping = false
    }

    
  }

  die() {
    console.log('le joueur est mort !')

    this.sprite.setScale(0.5, 0.1)
    this.canMove = false
  }
}