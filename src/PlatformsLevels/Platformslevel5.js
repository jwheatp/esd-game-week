class PlatformLevelsScene5 {
  scene;

  platforms = []

  // speed = 150;
  constructor(scene) {
    this.scene = scene;
    // const x = 100;
    // const y = 540;
    // this.x = x;
    // this.y = y;

    // this.isGoingRight = true;

    this.GrassPlatform = scene.physics.add.staticImage(100, 400, "grassPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.GrassPlatform);
    this.platforms.push(this.GrassPlatform)

    this.cakePlatform = scene.physics.add.staticImage(320, 260, "cakePlatform")
    this.platforms.push(this.cakePlatform)

    this.cakePlatform = scene.physics.add.staticImage(320, 500, "cakePlatform")
    this.platforms.push(this.cakePlatform)

    this.bigsnowPlatform = scene.physics.add.staticImage(640, 200, "bigsnowPlatform")
    this.platforms.push(this.bigsnowPlatform)


    this.bigsnowPlatform = scene.physics.add.staticImage(640, 600, "bigsnowPlatform")
    this.platforms.push(this.bigsnowPlatform)

    this.bigsnowPlatform = scene.physics.add.staticImage(640, 400, "bigsnowPlatform")
    this.platforms.push(this.bigsnowPlatform)

    this.rockPlatform = scene.physics.add.staticImage(930, 280, "rockPlatform");
    this.platforms.push(this.rockPlatform)

    this.rockPlatform = scene.physics.add.staticImage(930, 500, "rockPlatform");
    this.platforms.push(this.rockPlatform)


    this.grassPlatform = scene.physics.add.staticImage(1170, 200, "grassPlatform")
    this.platforms.push(this.grassPlatform)

    this.grassPlatform = scene.physics.add.staticImage(1170, 600, "grassPlatform")
    this.platforms.push(this.grassPlatform)


    // Bordure pour ne pas passer à droite 

    this.collideBorderRight = scene.physics.add.staticImage(1280, 360, "collideborder");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.collideBorderRight)
    this.collideBorderRight.setAlpha(0)
    this.platforms.push(this.collideBorderRight)


    this.collideBorderLeft = scene.physics.add.staticImage(0, 360, "collideborder");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.collideBorderLeft)
    this.collideBorderLeft.setAlpha(0)
    this.platforms.push(this.collideBorderLeft)

    // this.dirtPlatform = scene.physics.add.image(x, y, "dirtPlatform");
    // this.dirtPlatform.body.setAllowGravity(false);
    // this.dirtPlatform.setImmovable(true);
    // // this.scene.physics.add.collider(this.scene.player.sprite, this.dirtPlatform);
    // this.dirtPlatform.setVelocityX(this.speed);
    // this.platforms.push(this.dirtPlatform)


    // this.isGoingRight = true;



    //this.sprite = scene.physics.add.staticImage(200, 200, "snowPlatform");

    // this.sprite = scene.physics.add.staticImage(x, y, "cakePlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "grassPlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "dirtPlatform");

  }

  initCollider(target) {
    for (let i = 0; i < this.platforms.length; i++) {
      this.scene.physics.add.collider(target, this.platforms[i]);
    }
  }

  destroy() {
    for (let i = 0; i < this.platforms.length; i++) {
      this.platforms[i].destroy()
    }
  }
  
  update() {
    // if (this.isGoingRight && this.dirtPlatform.body.x > this.x + 550) {

    //   this.dirtPlatform.setVelocityX(-this.speed);
    //   this.isGoingRight = false;
    // }

    // if (!this.isGoingRight && this.dirtPlatform.body.x < this.x - 10) {
    //   this.dirtPlatform.setVelocityX(this.speed);
    //   this.isGoingRight = true;
    // }
  }
}





