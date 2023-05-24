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

    this.x = x;
    this.y = y;

    this.sprite = scene.physics.add.sprite(x, y, "player-idl");
    this.sprite.setScale(0.5)

    this.sprite.body.setMass(1000);

    //score text
    this.scoreText = this.scene.add.text(600, 50, "t", {
      fontSize: "40px",
      color: "black",
    });
    //score
    this.scene.physics.add.overlap(this.scene.endPoint, this.sprite, () => {
      this.winRound();
    });

    /*tests animations*/
    this.scene.anims.create({
      key: "anim-player-run",
      frames: [{ key: "player-run" }, { key: "player-walk" }],
      frameRate: 7,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "anim-player-idl",
      frames: [{ key: "player-idl" }],
      frameRate: 7,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "anim-player-jump",
      frames: [{ key: "player-jump" }],
      frameRate: 7,
      repeat: -1,
    });
    this.sprite.body.setMass(1000)

    Platform.addCollider(this.sprite)
  }
  //score

  winRound() {

    this.score += 1;
    this.scoreText.setText("player:" + this.score);
  }

  update() {
    if (!this.score) {
      this.scene.isgameover = true;
    }
    if (!this.canMove) {
      this.sprite.setVelocityX(0);
      return;
    }
    // saut
    if (!this.isJumping && this.scene.inputs.up.isDown) {
      this.isJumping = true;
      // this.scene.sound.play("jump");

      // je mets une vitesse X à 200
      this.sprite.setVelocityY(-this.jump);
      this.lastSpeedY = -this.jump;
      this.sprite.play("anim-player-jump", true);
    }

    // déplacement horizontal
    if (this.scene.inputs.right.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityX(this.speed);
      this.lastSpeedX = this.speed;
      this.sprite.play("anim-player-run", true);
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
      this.sprite.play("anim-player-idl", true);
    }

    if (Math.abs(this.sprite.body.velocity.y) === 0) {
      this.isJumping = false;
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
