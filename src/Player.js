class Player {
  scene;
  sprite;
  speed = 200;
  jump = 400;
  canMove = true;
  isJumping = false;

  skinNumber = 1;

  isDie = false;

  lastSpeedX = 0;
  lastSpeedY = 0;
  scoreText;
  score = 0;


  constructor(scene, x, y) {
    this.scene = scene;

    this.x = x;
    this.y = y;

    this.sprite = scene.physics.add.sprite(x, y, "player");

    this.sprite.body.setMass(1000);

    //score text
    this.scoreText = this.scene.add.text(600, 50, "t", {
      fontSize: "40px",
      color: "black",
    });

    /*animations*/
    this.scene.anims.create({
      key: 'anim-player-' + this.skinNumber + '-run',
      frames: [{ key: "player-" + this.skinNumber + "-run" }, { key: "player-" + this.skinNumber + "-walk" }],
      frameRate: 7,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'anim-player-' + this.skinNumber + '-idl',
      frames: [{ key: "player-" + this.skinNumber + "-idl" }],
      frameRate: 7,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'anim-player-' + this.skinNumber + '-jump',
      frames: [{ key: "player-" + this.skinNumber + "-jump" }],
      frameRate: 7,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'anim-player-' + this.skinNumber + '-death',
      frames: [{ key: "player-" + this.skinNumber + "-death" }],
      frameRate: 7,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'anim-player-' + this.skinNumber + '-victory',
      frames: [{ key: "player-" + this.skinNumber + "-move1" }, { key: "player-" + this.skinNumber + "-move2" }, {
        key: "player-" + this.skinNumber + "-move3"
      }, { key: "player-" + this.skinNumber + "-move4" }],
      frameRate: 7,
      repeat: -1
    })


    this.scene.physics.add.overlap(this.scene.endPoint, this.sprite, () => {
      this.winRound();
    });
  }
  //score

  winRound() {
    this.score += 1;
    this.scoreText.setText("player:" + this.score);
  }
  safezone() { }

  update() {
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
      this.sprite.play("anim-player-" + this.skinNumber + "-jump", true);
    }

    // déplacement horizontal
    if (this.scene.inputs.right.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityX(this.speed);
      this.lastSpeedX = this.speed;
      this.sprite.play('anim-player-' + this.skinNumber + '-run', true);
      if (this.isJumping) {
        this.sprite.play('anim-player-' + this.skinNumber + '-jump', true);
      }
      this.sprite.flipX = false
    } else if (this.scene.inputs.left.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityX(-this.speed);
      this.lastSpeedX = -this.speed;
      this.sprite.flipX = true
    } else if (this.scene.inputs.down.isDown) {
      // je mets une vitesse X à 200
      this.sprite.setVelocityY(this.speed);
    } else {
      // sinon, je remets la vitesse à 0
      this.sprite.setVelocityX(0);
      this.lastSpeedX = 0;

      if (!this.isJumping || this.isDie) {
        this.sprite.play('anim-player-' + this.skinNumber + '-idl', true);

      }
    }

    if (Math.abs(this.sprite.body.velocity.y) === 0) {
      this.isJumping = false;
    }

    //if player win
    if (this.nPoint) {
      this.sprite.play('anim-player-' + this.skinNumber + '-victory', true)
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
    this.isDie = true;

    this.sprite.play('anim-player-' + this.skinNumber + '-death', true);

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
