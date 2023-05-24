class MonsterTrap extends Trap {
  scene;
  piques;
  ground;
  bleu;
  barnacle;

  x;
  y;

  constructor(scene, x, y) {
    super(scene, x, y);

    this.scene = scene;
    this.x = x;
    this.y = y;

    this.piques = scene.physics.add.image(x, y + 9, "trap-monster-piques");
    this.piques.setScale(0.6);
    this.piques.body.setAllowGravity(false);
    this.scene.physics.add.overlap(
      this.piques,
      this.scene.player.sprite,
      () => {
        this.scene.player.die();
      }
    );

    this.barnacle = scene.physics.add.image(x + 22, y - 47, "barnacle");
    this.barnacle.body.setAllowGravity(false);

    this.bleu = scene.physics.add.image(x, y - 0, "monster");
    this.bleu.setScale(1);
    this.bleu.body.setAllowGravity(false);

    this.scene.physics.add.overlap(this.bleu, this.scene.player.sprite, () =>
      this.showPiques()
    );

    this.ground = scene.physics.add.image(x, y, "trap-monster-ground");
    this.ground.setScale(1);
    this.ground.body.setAllowGravity(false);
    this.ground.setImmovable(true);
    this.scene.physics.add.collider(this.ground, this.scene.player.sprite);
  }

  showPiques() {
    this.piques.setVelocityY(-200);
  }

  setVelocityX(speed) {
    // je mets une vitesse X à 200
    this.ground.setVelocityX(speed);
    this.piques.setVelocityX(speed);
    this.barnacle.setVelocityX(speed);
    this.bleu.setVelocityX(speed);
  }

  setVelocityY(speed) {
    // je mets une vitesse X à 200
    this.ground.setVelocityY(speed);
    this.piques.setVelocityY(speed);
    this.barnacle.setVelocityY(speed);
    this.bleu.setVelocityY(speed);
  }

  update() {
    
    this.setup();

    if (this.ground.body.y > this.piques.y - 2) {
      this.piques.setVelocityY(0);
    }
  }
}
