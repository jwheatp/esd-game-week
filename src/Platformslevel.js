class PlatformLevels {
  scene;

  bigGrassPlatform

  constructor(scene) {
    this.scene = scene;

    this.bigGrassPlatform = scene.physics.add.staticImage(200, 600, "big-grassPlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);


    //this.sprite = scene.physics.add.staticImage(200, 200, "snowPlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "big-cakePlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "cakePlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "big-grassPlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "grassPlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "rockPlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "dirtPlatform");

  }
}
