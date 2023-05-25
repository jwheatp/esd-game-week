class PlatformLevelsScene2 {
  scene;

  platforms = []

  speed = 60;
  constructor(scene) {
    this.scene = scene;
    const x = 1060;
    const y = 300;
    this.x = x;
    this.y = y;

    this.isGoingTop = true;

    // this.bigGrassPlatform = scene.physics.add.staticImage(150, 500, "big-grassPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);



    this.bigGrassPlatform = scene.physics.add.staticImage(800, 620, "big-grassPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);
    this.platforms.push(this.bigGrassPlatform);


    this.rockPlatform = scene.physics.add.staticImage(400, 620, "rockPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rockPlatform);
    this.platforms.push(this.rockPlatform)

    this.rotateBigCakePlatform = scene.physics.add.staticImage(505, 400, "rotate-big-cakePlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatform);
    this.rotateBigCakePlatform.setAlpha(0)
    this.platforms.push(this.rotateBigCakePlatform);

    this.rotateBigCakePlatform2 = scene.physics.add.staticImage(505, 620, "rotate-big-cakePlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatform2);
    this.rotateBigCakePlatform2.setAlpha(0)
    this.platforms.push(this.rotateBigCakePlatform2);

    this.rotateBigCakePlatform3 = scene.physics.add.staticImage(500, 260, "rotate-big-cakePlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatform3);
    this.platforms.push(this.rotateBigCakePlatform3);

    this.rotateBigCakePlatform4 = scene.physics.add.staticImage(300, 260, "rotate-big-cakePlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatform4);
    this.rotateBigCakePlatform4.setAngle(180)
    this.platforms.push(this.rotateBigCakePlatform4);

    this.snowPlatform = scene.physics.add.staticImage(130, 550, "snowPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.snowPlatform);
    this.platforms.push(this.snowPlatform)



    this.rockPlatform = scene.physics.add.staticImage(750, 280, "rockPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rockPlatform);
    this.platforms.push(this.rockPlatform)

    this.dirtPlatform = scene.physics.add.image(x, y, "dirtPlatform");
    this.dirtPlatform.body.setAllowGravity(false);
    this.dirtPlatform.setImmovable(true);
    // this.scene.physics.add.collider(this.scene.player.sprite, this.dirtPlatform);
    this.platforms.push(this.dirtPlatform)
    this.dirtPlatform.setVelocityY(this.speed);


    this.isGoingTop = true;

    // Bordure pour ne pas passer à droite 

    this.collideBorderRight = scene.physics.add.staticImage(1280, 360, "collideborder");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.collideBorderRight)
    this.platforms.push(this.collideBorderRight)
    this.collideBorderRight.setAlpha(0)

    // Bordure pour ne pas passer à gauche

    this.collideBorderLeft = scene.physics.add.staticImage(0, 360, "collideborder");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.collideBorderLeft)
    this.collideBorderLeft.setAlpha(0)
    this.platforms.push(this.collideBorderLeft)

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

  update() {
    if (this.isGoingTop && this.dirtPlatform.body.y > this.y + 210) {

      this.dirtPlatform.setVelocityY(-this.speed);
      this.isGoingTop = false;
    }

    if (!this.isGoingTop && this.dirtPlatform.body.y < this.y - 100) {
      this.dirtPlatform.setVelocityY(this.speed);
      this.isGoingTop = true;
    }
  }
}



