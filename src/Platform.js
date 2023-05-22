class Platform {
  scene
  sprite

  constructor(scene, x, y) {
    this.scene = scene

    this.sprite = scene.physics.add.staticImage(x, y, "platform");
  }
}