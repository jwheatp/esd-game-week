class MonsterTrap extends Trap {
  scene;
  platformSprite;
  discSprite;

  x;
  y;

  constructor(scene, x, y) {
    super();

    this.scene = scene;
    this.x = x;
    this.y = y;

    this.piques = scene.physics.add.image(x, y + 8, "trap-monster-disc");
    this.piques.setScale(1);
    this.piques.body.setAllowGravity(false);

    this.ground = scene.physics.add.image(x, y, "trap-monster-platform");
    this.ground.setScale(1);
    this.ground.body.setAllowGravity(false);
    this.ground.setImmovable(true);
    this.scene.physics.add.collider(this.ground, this.scene.player.sprite);

    this.piques.setVelocityY(-10);
  }

  update() {
    if (this.ground.body.y > this.piques.y - 10) {
      this.piques.setVelocityY(0);
    }
  }
}
