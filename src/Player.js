class Player {
  scene;
  sprite;
  speed = 200;
  jump = 400;
  canMove = true;
  isJumping = false;

  skinNumber = 1;

  lastSpeedX = 0;
  lastSpeedY = 0;
  scoreText;
  score = 0;

  hasWon = false;
  inputPayload = {

  };

  inputQueue = []

  gravityY

  constructor(scene, x, y) {
    this.scene = scene;

    this.x = x;
    this.y = y;

    // this.sprite.body.setAllowGravity(false)
    this.sprite = scene.physics.add.sprite(x, y, "player-idl");
    this.sprite.setScale(0.5);

    this.sprite.body.setMass(1000);

    this.sprite.setScale(0.4)

    //score text
    this.scoreText = this.scene.add.text(600, 50, "", {
      fontSize: "40px",
      color: "black",
    });

    //score
    // this.scene.physics.add.overlap(this.scene.endPoint, this.sprite, () => {
    //   this.winRound();
    // });
    // this.scene.physics.add.overlap(this.scene.endPoint, this.sprite, () => {
    //   this.winRound();
    //   this.scene.isgameover = true;
    //   this.canMove = false
    // });

    /*animations*/
    this.scene.anims.create({
      key: 'anim-player-' + this.skinNumber + '-run',
      frames: [{ key: "player-" + this.skinNumber + "-run" }, { key: "player-" + this.skinNumber + "-walk" }],
      frameRate: 7,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'anim-player-' + this.skinNumber + '-idl',
      frames: [{ key: "player-" + this.skinNumber + "-idl" }],
      frameRate: 7,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'anim-player-' + this.skinNumber + '-jump',
      frames: [{ key: "player-" + this.skinNumber + "-jump" }],
      frameRate: 7,
      repeat: -1,
    });
    this.sprite.body.setMass(1000);

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

    this.sprite.body.setMass(1000);

    // Platform.addCollider(this.sprite)
    this.scene.platformsLevels.initCollider(this.sprite);

    // this.scene.physics.add.overlap(this.scene.endPoint, this.sprite, () => {
    //   this.winRound();
    // });

  }

  reset() {
    this.hasWon = false;
    this.isDead = false;

    this.sprite.setScale(0.5);
    this.canMove = true;

    this.sprite.play("anim-player-" + this.skinNumber + "-idl", true);
  }

  //score

  winRound() {
    this.score += 1;
    this.scoreText.setText("player:" + this.score);

    this.hasWon = true;
    if (this.scene.isgameover) {
      return;
    }
    this.scene.sound.play("gamewin");
  }

  update() {
    // console.log(this.traps, this.trapPositions)

    // if (!this.score) {
    //   this.scene.isgameover = true;
    // }
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
      this.inputPayload.animation = "jump"
      // this.scene.sound.play("jump");

      // je mets une vitesse X à 200
      this.sprite.body.setVelocityY(-2 * this.speed)

      this.lastSpeedY = -this.jump;
      this.sprite.play("anim-player-" + this.skinNumber + "-jump", true);
      this.inputPayload.animation = "anim-player-jump"
    }

    // déplacement horizontal
    if (this.scene.inputs.right.isDown) {
      // je mets une vitesse X à 200
      this.sprite.body.setVelocityX(this.speed)
      this.inputPayload.animation = "anim-player-run"
      this.lastSpeedX = this.speed;
      this.sprite.flipX = false
      //lancement de l'animation
      if (!this.isJumping) {
        this.sprite.play('anim-player-' + this.skinNumber + '-run', true);
      }

    }
    else if (this.scene.inputs.left.isDown) {
      // je mets une vitesse X à 200
      this.sprite.body.setVelocityX(-this.speed)
      //launch animation
      if (!this.isJumping) {
        this.sprite.play('anim-player-' + this.skinNumber + '-run', true);
        //reverse player
        this.sprite.flipX = true
      }

    } else {
      // sinon, je remets la vitesse à 0
      this.sprite.body.setVelocityX(0)

      if (!this.isJumping) {
        this.sprite.play('anim-player-' + this.skinNumber + '-idl', true);
        this.inputPayload.animation = "anim-player-idl"

      }
      this.lastSpeedX = 0;

      if (!this.isJumping || this.isDie) {
        this.sprite.play('anim-player-' + this.skinNumber + '-idl', true);

      }
    }


    // this.sprite.y += speed
    // this.inputPayload.up = true
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

  fall() { }

  die() {
    console.log("le joueur est mort !");

    this.isDead = true;

    this.sprite.play('anim-player-' + this.skinNumber + '-death', true);

    this.canMove = false;
    this.isDead = true;

    this.sprite.setVelocityX(0)
    this.sprite.setVelocityY(0)

    this.canMove = false;

    const numBlinks = 10;
    const blinkInterval = 250;

    let blinkCount = 0;

    // const blinkIntervalId = setInterval(() => {
    //   this.sprite.alpha = this.sprite.alpha === 1 ? 0.2 : 1;

    //   blinkCount++;

    //   if (blinkCount >= numBlinks) {
    //     clearInterval(blinkIntervalId);
    //     this.sprite.alpha = 0.2;
    //     this.canMove = true;
    //   }
    // }, blinkInterval);
  }

  destroy() {
    this.sprite.alpha = 0;
  }
  fall() {
    this.scene.sound.play("gamelose");
  }
}
