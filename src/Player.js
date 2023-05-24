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

  inputPayload = {
    left: false,
    right: false,
    up: false,
    down: false,
  };

  inputQueue = []

  gravityY

  constructor(scene, x, y) {
    this.scene = scene;

    this.x = x;
    this.y = y;

    this.sprite = scene.physics.add.sprite(x, y, "player");
    // this.sprite.body.setAllowGravity(false)

    this.sprite.body.setMass(1000);

    this.sprite.setScale(0.4)

    //score text
    this.scoreText = this.scene.add.text(600, 50, "t", {
      fontSize: "40px",
      color: "black",
    });

    /*tests animations*/
    this.scene.anims.create({
      key: 'anim-player-run',
      frames: [{ key: "player-run" }, { key: "player-walk" }],
      frameRate: 7,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'anim-player-idle',
      frames: [{ key: "player-idl" }],
      frameRate: 7,
      repeat: -1
    });

    this.scene.anims.create({
      key: 'anim-player-jump',
      frames: [{ key: "player-jump" }],
      frameRate: 7,
      repeat: -1
    });


    this.scene.physics.add.overlap(this.scene.endPoint, this.sprite, () => {
      this.winRound();
    });
    this.sprite.body.setMass(1000)

    this.initPlatformColliders()
  }

  initPlatformColliders() {
    for(let i = 0; i < this.scene.platforms.length; i++) {
      this.scene.physics.add.collider(this.sprite, this.scene.platforms[i])
    }
  }
  //score

  winRound() {
    this.score += 1;
    this.scoreText.setText("player:" + this.score);
  }
  safezone() { }

  update() {
    const speed = 2

    this.inputPayload = {
      x: this.sprite.x,
      y: this.sprite.y
    }

    if (!this.canMove) {
      // this.sprite.setVelocityX(0);
      return;
    }

    // saut
    if (!this.isJumping && this.scene.inputs.up.isDown) {
      this.isJumping = true;
      this.scene.sound.play("jump");

      // je mets une vitesse X à 200
      this.sprite.body.setVelocityY(-2*this.speed)

      this.lastSpeedY = -this.jump;
      this.sprite.play('anim-player-jump', true);
    }

    // déplacement horizontal
    if (this.scene.inputs.right.isDown) {
      // je mets une vitesse X à 200
      this.sprite.body.setVelocityX(this.speed)
      //this.lastSpeedX = this.speed;
      this.sprite.play('anim-player-run', true);
    } else if (this.scene.inputs.left.isDown) {
      // je mets une vitesse X à 200

      this.sprite.body.setVelocityX(-this.speed)
    } else {
      // sinon, je remets la vitesse à 0
      this.sprite.body.setVelocityX(0)
      this.sprite.play('anim-player-idle', true);
    }


    // this.sprite.y += speed
    // this.inputPayload.up = true
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
