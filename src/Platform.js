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

  static addCollider(target) {
    for(let i = 0; i < this.scene.platforms.length; i++) {
      this.scene.physics.add.collider(target, this.scene.platforms[i])
    }
  }
}
