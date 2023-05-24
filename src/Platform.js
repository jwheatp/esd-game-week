class Platform {
  scene;
  sprite;

  constructor(scene, x, y) {
    this.scene = scene;

    this.sprite = scene.physics.add.image(x, y, "platform");
    this.sprite.body.setAllowGravity(false)
    this.sprite.body.setImmovable(true)

    this.scene.platforms.push(this.sprite)
  }
}
