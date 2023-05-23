class MonsterTrap extends Trap {
  scene;
  piques;
  ground;

  x;
  y;

  constructor(scene, x, y) {
    super();

    this.scene = scene;
    this.x = x;
    this.y = y;

    this.piques = scene.physics.add.image(x, y + 8, "trap-monster-piques");
    this.piques.setScale(0.7);
    this.piques.body.setAllowGravity(false);
    this.scene.physics.add.overlap(
      this.piques,
      this.scene.player.sprite,
      () => {
        this.scene.player.die();
      }
    );

    this.ground = scene.physics.add.image(x, y, "trap-monster-ground");
    this.ground.setScale(1);
    this.ground.body.setAllowGravity(false);
    this.ground.setImmovable(true);
    this.scene.physics.add.collider(this.ground, this.scene.player.sprite);

    this.piques.setVelocityY(-50);
  }

  update() {
    if (this.ground.body.y > this.piques.y - 10) {
      this.piques.setVelocityY(0);
    }
  }
}
