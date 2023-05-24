class hbBlackHole extends Trap {
  scene;
  x;
  y;
  sprite;

  constructor(scene, x, y) {
    super();
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.sprite = scene.physics.add.image(x, y, "hb-trap-blackHole");
    this.sprite.setScale(0.4);
    this.sprite.body.setAllowGravity(false);

  }
  update() { }
}
