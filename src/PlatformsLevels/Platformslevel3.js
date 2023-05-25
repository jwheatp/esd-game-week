class PlatformLevelsScene3 {
  scene;

  speed = 150;
  constructor(scene) {
    this.scene = scene;
    const x = 100;
    const y = 540;
    this.x = x;
    this.y = y;

    this.isGoingRight = true;

    this.GrassPlatform = scene.physics.add.staticImage(1200, 200, "grassPlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.GrassPlatform);


    this.bigdirtPlatform = scene.physics.add.staticImage(850, 320, "big-dirtPlatform")
    this.scene.physics.add.collider(this.scene.player.sprite, this.bigdirtPlatform);

    this.RotatedirtPlatform = scene.physics.add.staticImage(750, 250, "90dirtPlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.RotatedirtPlatform);

    this.bigdirtPlatform = scene.physics.add.staticImage(640, 200, "big-dirtPlatform")
    this.scene.physics.add.collider(this.scene.player.sprite, this.bigdirtPlatform);

    this.bigdirtPlatform = scene.physics.add.staticImage(450, 200, "big-dirtPlatform")
    this.scene.physics.add.collider(this.scene.player.sprite, this.bigdirtPlatform);

    this.RotatedirtPlatform = scene.physics.add.staticImage(340, 250, "90dirtPlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.RotatedirtPlatform);
    this.RotatedirtPlatform.setAngle(180)

    // Bordure pour ne pas passer à droite 

    this.collideBorderRight = scene.physics.add.staticImage(1280, 360, "collideborder");
    this.scene.physics.add.collider(this.scene.player.sprite, this.collideBorderRight)
    this.collideBorderRight.setAlpha(0)

    this.bigdirtPlatform = scene.physics.add.staticImage(570, 409, "big-dirtPlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.bigdirtPlatform);

    this.brickCube = scene.physics.add.staticImage(340, 470, "brickCube");
    this.scene.physics.add.collider(this.scene.player.sprite, this.brickCube);

    this.brickCube = scene.physics.add.staticImage(740, 470, "brickCube");
    this.scene.physics.add.collider(this.scene.player.sprite, this.brickCube);

    // Bordure pour ne pas passer à gauche

    this.collideBorderLeft = scene.physics.add.staticImage(0, 360, "collideborder");
    this.scene.physics.add.collider(this.scene.player.sprite, this.collideBorderLeft)
    this.collideBorderLeft.setAlpha(0)

    this.dirtPlatform = scene.physics.add.image(x, y, "dirtPlatform");
    this.dirtPlatform.body.setAllowGravity(false);
    this.dirtPlatform.setImmovable(true);
    this.scene.physics.add.collider(this.scene.player.sprite, this.dirtPlatform);
    this.dirtPlatform.setVelocityX(this.speed);


    this.isGoingRight = true;



    //this.sprite = scene.physics.add.staticImage(200, 200, "snowPlatform");

    // this.sprite = scene.physics.add.staticImage(x, y, "cakePlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "grassPlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "dirtPlatform");

  }

  update() {
    if (this.isGoingRight && this.dirtPlatform.body.x > this.x + 550) {

      this.dirtPlatform.setVelocityX(-this.speed);
      this.isGoingRight = false;
    }

    if (!this.isGoingRight && this.dirtPlatform.body.x < this.x - 10) {
      this.dirtPlatform.setVelocityX(this.speed);
      this.isGoingRight = true;
    }
  }
}





