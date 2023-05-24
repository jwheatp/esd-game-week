class Player {
  scene;
  sprite;
  speed = 200;
  jump = 400;
  canMove = true;
  isJumping = false;

  lastSpeedX = 0;
  lastSpeedY = 0;
  scoreText;
  score = 0;
  

  constructor(scene, x, y) {
    this.scene = scene;

    this.x = x
    this.y = y

    this.sprite = scene.physics.add.image(x, y, "player");

    this.sprite.body.setMass(1000);

    this.scoreText = this.scene.add.text(850, 100, "yoyo, tit, tuu, tito", {
      fontSize: "15px",
      color: "black",
    });

    /*tests animations*/


  }
  //score

  winRound() {
    this.score += 1;
    this.scoreText.setText("Points: " + this.score);
  }

  update() {
    if (!this.canMove) {
      this.sprite.setVelocityX(0);
      return;
    }

    // saut
    if (!this.isJumping && this.scene.inputs.up.isDown) {
      this.isJumping = true;
      // je mets une vitesse X à 200
      this.sprite.setVelocityY(-this.jump);
      this.lastSpeedY = -this.jump;
    }

    // déplacement horizontal
    if (this.scene.inputs.right.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityX(this.speed);
      this.lastSpeedX = this.speed;
      // this.scene.anims.play('anim-player-run', true);
    } else if (this.scene.inputs.left.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityX(-this.speed);
      this.lastSpeedX = -this.speed;
    } else if (this.scene.inputs.down.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityY(this.speed);
    } else {
      // sinon, je remets la vitesse à 0
      this.sprite.setVelocityX(0);
      this.lastSpeedX = 0;
      //this.sprite.anims.stop('player-run');
    }

    if (Math.abs(this.sprite.body.velocity.y) === 0) {
      this.isJumping = false;
    }
    //score 
    if (this.scene.inputs.space.isDown) {
      this.winRound();
    }
  }

  freeze() {
    this.canMove = false;
    this.sprite.body.setAllowGravity(false);
  }

  unfreeze() {
    this.canMove = true;
    this.sprite.body.setAllowGravity(true);
  }

  die() {
    console.log("le joueur est mort !");

    this.sprite.setScale(0.5, 0.1);
    this.canMove = false;

    this.canMove = false;

    const numBlinks = 10;
    const blinkInterval = 250;

    let blinkCount = 0;

    const blinkIntervalId = setInterval(() => {
      this.sprite.alpha = this.sprite.alpha === 1 ? 0.2 : 1;

      blinkCount++;

      if (blinkCount >= numBlinks) {
        clearInterval(blinkIntervalId);
        this.sprite.alpha = 0.2;
        this.canMove = true;
      }
    }, blinkInterval);



  }

  destroy() {
    this.sprite.alpha = 0;
  }
}
