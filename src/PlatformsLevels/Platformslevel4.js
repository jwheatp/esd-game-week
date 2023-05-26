class PlatformLevelsScene4 {
  scene;

  platforms = []

  speed = 150;
  constructor(scene) {
    this.scene = scene;
    const x = 1000;
    const y = 240;
    this.x = x;
    this.y = y;

    this.isGoingRight = true;

    this.bigGrassPlatform = scene.physics.add.staticImage(130, 670, "big-grassPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.GrassPlatform);
    this.platforms.push(this.bigGrassPlatform)


    this.RotatesnowPlatform = scene.physics.add.staticImage(355, 590, "rotatesnowPlatform");
    this.platforms.push(this.RotatesnowPlatform)

    this.grassPlatform = scene.physics.add.staticImage(510, 600, "grassPlatform");
    this.platforms.push(this.grassPlatform)

    this.bigGrassPlatform = scene.physics.add.staticImage(490, 400, "big-grassPlatform");
    this.platforms.push(this.bigGrassPlatform)

    this.bigdirtPlatform = scene.physics.add.staticImage(750, 670, "big-dirtPlatform")
    this.platforms.push(this.bigdirtPlatform)

    this.bigdirtPlatform = scene.physics.add.staticImage(940, 670, "big-dirtPlatform")
    this.platforms.push(this.bigdirtPlatform)

    this.bigGrassPlatform = scene.physics.add.staticImage(650, 290, "big-dirtPlatform")
    this.platforms.push(this.bigGrassPlatform)

    this.snowPlatform = scene.physics.add.staticImage(1000, 500, "snowPlatform")
    this.platforms.push(this.snowPlatform)

    this.cakePlatform = scene.physics.add.staticImage(1125, 370, "cakePlatform")
    this.platforms.push(this.cakePlatform)

    this.rockPlatform = scene.physics.add.staticImage(1170, 590, "rockPlatform")
    this.platforms.push(this.rockPlatform)

    this.rockPlatform = scene.physics.add.staticImage(1200, 290, "rockPlatform")
    this.platforms.push(this.rockPlatform)

    this.doublebigdirtPlatform = scene.physics.add.staticImage(660, 50, "double-bigdirtPlatform")


    // Bloc invisible

    this.RotatesnowPlatform = scene.physics.add.staticImage(535, 60, "rotatesnowPlatform");
    this.platforms.push(this.RotatesnowPlatform)
    this.RotatesnowPlatform.setAlpha(0)

    this.RotatesnowPlatform = scene.physics.add.staticImage(565, 30, "rotatesnowPlatform");
    this.platforms.push(this.RotatesnowPlatform)
    this.RotatesnowPlatform.setAlpha(0)

    this.RotatesnowPlatform = scene.physics.add.staticImage(595, 0, "rotatesnowPlatform");
    this.platforms.push(this.RotatesnowPlatform)
    this.RotatesnowPlatform.setAlpha(0)

    this.RotatesnowPlatform = scene.physics.add.staticImage(625, 0, "rotatesnowPlatform");
    this.platforms.push(this.RotatesnowPlatform)
    this.RotatesnowPlatform.setAlpha(0)

    this.RotatesnowPlatform = scene.physics.add.staticImage(655, 0, "rotatesnowPlatform");
    this.platforms.push(this.RotatesnowPlatform)
    this.RotatesnowPlatform.setAlpha(0)

    this.RotatesnowPlatform = scene.physics.add.staticImage(700, 0, "rotatesnowPlatform");
    this.platforms.push(this.RotatesnowPlatform)
    this.RotatesnowPlatform.setAlpha(0)

    this.RotatesnowPlatform = scene.physics.add.staticImage(730, 20, "rotatesnowPlatform");
    this.platforms.push(this.RotatesnowPlatform)
    this.RotatesnowPlatform.setAlpha(0)

    this.RotatesnowPlatform = scene.physics.add.staticImage(760, 30, "rotatesnowPlatform");
    this.platforms.push(this.RotatesnowPlatform)
    this.RotatesnowPlatform.setAlpha(0)

    this.RotatesnowPlatform = scene.physics.add.staticImage(790, 60, "rotatesnowPlatform");
    this.platforms.push(this.RotatesnowPlatform)
    this.RotatesnowPlatform.setAlpha(0)

    this.collideBorderRight = scene.physics.add.staticImage(1280, 360, "collideborder");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.collideBorderRight)
    this.collideBorderRight.setAlpha(0)
    this.platforms.push(this.collideBorderRight)

    this.collideBorderLeft = scene.physics.add.staticImage(0, 360, "collideborder");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.collideBorderLeft)
    this.collideBorderLeft.setAlpha(0)
    this.platforms.push(this.collideBorderLeft)

    this.snowPlatform = scene.physics.add.image(x, y, "snowPlatform");
    this.snowPlatform.body.setAllowGravity(false);
    this.snowPlatform.setImmovable(true);
    // this.scene.physics.add.collider(this.scene.player.sprite, this.dirtPlatform);
    this.snowPlatform.setVelocityX(this.speed);
    this.platforms.push(this.snowPlatform)


    this.isGoingRight = true;



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
    if (this.isGoingRight && this.snowPlatform.body.x > this.x + 0) {

      this.snowPlatform.setVelocityX(-this.speed);
      this.isGoingRight = false;
    }

    if (!this.isGoingRight && this.snowPlatform.body.x < this.x - 200) {
      this.snowPlatform.setVelocityX(this.speed);
      this.isGoingRight = true;
    }
  }
}





